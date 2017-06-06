<?php
header('Content-Type: application/json');
$link = mysqli_connect("db", "local", "local", "local");

if (!$link) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    exit;
}

//echo "Success: A proper connection to MySQL was made! The db database is great." . PHP_EOL;
//echo "Host information: " . mysqli_get_host_info($link) . PHP_EOL;

$result = [];

/* check connection */
if ($link->connect_errno) {
    printf("Connect failed: %s\n", $link->connect_error);
    exit();
}

$countries = $link->query("select * from countries", MYSQLI_USE_RESULT);

while ($row = $countries->fetch_assoc()) {
    $row['id'] = (int) $row['id'];
    $result['country'][] = $row;
//    echo json_encode($row, true);
}

$countries->close();
//added countries

$channels = $link->query("select * from channel", MYSQLI_USE_RESULT);

            while ($row = $channels->fetch_assoc()) {
                // types
                $row['id'] = (int) $row['id'];
                $row['country_id'] = (int) $row['country_id'];

                $result['channel'][] = $row;


            }
            $channels->close();
// added channels;

foreach($result['channel'] as &$c)
{

    $query = $link->query("select * from types where channel_id = ".$c['id'], MYSQLI_USE_RESULT);

    while ($row = $query->fetch_assoc()) {
        $row['id'] = (int) $row['id'];
        $row['fk_channel_id'] = (int) $row['channel_id'];
        unset($row['channel_id']);
        $c['channel_types'][] = $row;
    }
    // mappings


    $query->close();
}

foreach($result['channel'] as &$c)
{

    $query = $link->query("select id,field_name,description,field_type,type_id from mapping where channel_id = ".$c['id'], MYSQLI_USE_RESULT);

    while ($row = $query->fetch_assoc()) {
        $row['id'] = (int) $row['id'];
        $row['field_type'] = (int) $row['field_type'];
        $row['type_id'] = (int) $row['type_id'];
        $c['channel_mapping'][] = $row;
    }
    // mappings


    $query->close();
}


mysqli_close($link);
echo json_encode($result);
/*

CREATE TABLE `channel`
(
    `id` INT NOT NULL AUTO_INCREMENT ,
    `first` VARCHAR(255) NOT NULL ,
    `category` VARCHAR(255) NOT NULL ,
    `category_path` VARCHAR(255) NOT NULL ,
    `description` VARCHAR(255) NOT NULL ,
    `ean` VARCHAR(255) NOT NULL ,
    `gender` VARCHAR(255) NOT NULL ,
    `image` VARCHAR(255) NOT NULL ,
    `offerid` VARCHAR(255) NOT NULL ,
    `price` VARCHAR(255) NOT NULL ,
    `price_shipping` VARCHAR(255) NOT NULL ,
    `stock` VARCHAR(255) NOT NULL ,
    `timetoship` VARCHAR(255) NOT NULL ,
    `title` VARCHAR(255) NOT NULL ,
    `vendor` VARCHAR(255) NOT NULL ,
    `color`             VARCHAR(255) NULL ,
    `large_image`VARCHAR(255) NULL ,
    `material`   VARCHAR(255) NULL ,
    `price_old`  VARCHAR(255) NULL ,
    `size`       VARCHAR(255) NULL ,
    `subcategory`     VARCHAR(255) NULL ,
    `thirdcategory`   VARCHAR(255) NULL ,
    `Optimized_for`   VARCHAR(255) NULL ,
    `additional_image` VARCHAR(255) NULL ,
    `age_group`       VARCHAR(255) NULL ,
    `baseprice_unit`  VARCHAR(255) NULL ,
    `currency`       VARCHAR(255) NULL ,
    `dimensions`     VARCHAR(255) NULL ,
    `energy_info_link` VARCHAR(255) NULL ,
    `energy_label`     VARCHAR(255) NULL ,
    `energy_label_logo` VARCHAR(255) NULL ,
    `introduction_date` VARCHAR(255) NULL ,
    `rating`       VARCHAR(255) NULL ,
    `size_stock`   VARCHAR(255) NULL ,
    `variant_id`   VARCHAR(255) NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `modified_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (`id`)
)
ENGINE = InnoDB
 *
 */

