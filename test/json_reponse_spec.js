var frisby = require('frisby');

frisby.create('Ensure target response from github.')
    .get('http://localhost/channel.php')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSONTypes({
        country: Array,
        channel: Array
    })
    .expectJSONSchema({
            "$schema": "http://json-schema.org/draft-04/schema#",
            "definitions": {},
            "id": "http://example.com/example.json",
            "properties": {
                "channel": {
                    "id": "/properties/channel",
                    "items": {
                        "id": "/properties/channel/items",
                        "properties": {
                            "channel_image": {
                                "id": "/properties/channel/items/properties/channel_image",
                                "type": "string"
                            },
                            "channel_mapping": {
                                "id": "/properties/channel/items/properties/channel_mapping",
                                "items": {
                                    "id": "/properties/channel/items/properties/channel_mapping/items",
                                    "properties": {
                                        "description": {
                                            "id": "/properties/channel/items/properties/channel_mapping/items/properties/description",
                                            "type": "string"
                                        },
                                        "field_name": {
                                            "id": "/properties/channel/items/properties/channel_mapping/items/properties/field_name",
                                            "type": "string"
                                        },
                                        "field_type": {
                                            "id": "/properties/channel/items/properties/channel_mapping/items/properties/field_type",
                                            "type": "integer"
                                        },
                                        "id": {
                                            "id": "/properties/channel/items/properties/channel_mapping/items/properties/id",
                                            "type": "integer"
                                        },
                                        "type_id": {
                                            "id": "/properties/channel/items/properties/channel_mapping/items/properties/type_id",
                                            "type": "integer"
                                        }
                                    },
                                    "type": "object"
                                },
                                "type": "array"
                            },
                            "channel_name": {
                                "id": "/properties/channel/items/properties/channel_name",
                                "type": "string"
                            },
                            "channel_types": {
                                "id": "/properties/channel/items/properties/channel_types",
                                "items": {
                                    "id": "/properties/channel/items/properties/channel_types/items",
                                    "properties": {
                                        "fk_channel_id": {
                                            "id": "/properties/channel/items/properties/channel_types/items/properties/fk_channel_id",
                                            "type": "integer"
                                        },
                                        "id": {
                                            "id": "/properties/channel/items/properties/channel_types/items/properties/id",
                                            "type": "integer"
                                        },
                                        "type": {
                                            "id": "/properties/channel/items/properties/channel_types/items/properties/type",
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                },
                                "type": "array"
                            },
                            "country_id": {
                                "id": "/properties/channel/items/properties/country_id",
                                "type": "integer"
                            },
                            "id": {
                                "id": "/properties/channel/items/properties/id",
                                "type": "integer"
                            }
                        },
                        "type": "object"
                    },
                    "type": "array"
                },
                "country": {
                    "id": "/properties/country",
                    "items": {
                        "id": "/properties/country/items",
                        "properties": {
                            "country_name": {
                                "id": "/properties/country/items/properties/country_name",
                                "type": "string"
                            },
                            "id": {
                                "id": "/properties/country/items/properties/id",
                                "type": "integer"
                            }
                        },
                        "type": "object"
                    },
                    "type": "array"
                }
            },
            "type": "object"
        }

    )
    .afterJSON(function(j) {
        console.log(JSON.stringify(j, 't', 4));
    })
    .toss();

frisby.create('Ensure Jeroen Has right response from github.')
    .get('http://localhost/index.php')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSONTypes({
        country: Array,
        channel: Array
    })
    .expectJSONSchema({
            "$schema": "http://json-schema.org/draft-04/schema#",
            "definitions": {},
            "id": "http://example.com/example.json",
            "properties": {
                "channel": {
                    "id": "/properties/channel",
                    "items": {
                        "id": "/properties/channel/items",
                        "properties": {
                            "channel_image": {
                                "id": "/properties/channel/items/properties/channel_image",
                                "type": "string"
                            },
                            "channel_mapping": {
                                "id": "/properties/channel/items/properties/channel_mapping",
                                "items": {
                                    "id": "/properties/channel/items/properties/channel_mapping/items",
                                    "properties": {
                                        "description": {
                                            "id": "/properties/channel/items/properties/channel_mapping/items/properties/description",
                                            "type": "string"
                                        },
                                        "field_name": {
                                            "id": "/properties/channel/items/properties/channel_mapping/items/properties/field_name",
                                            "type": "string"
                                        },
                                        "field_type": {
                                            "id": "/properties/channel/items/properties/channel_mapping/items/properties/field_type",
                                            "type": "integer"
                                        },
                                        "id": {
                                            "id": "/properties/channel/items/properties/channel_mapping/items/properties/id",
                                            "type": "integer"
                                        },
                                        "type_id": {
                                            "id": "/properties/channel/items/properties/channel_mapping/items/properties/type_id",
                                            "type": "integer"
                                        }
                                    },
                                    "type": "object"
                                },
                                "type": "array"
                            },
                            "channel_name": {
                                "id": "/properties/channel/items/properties/channel_name",
                                "type": "string"
                            },
                            "channel_types": {
                                "id": "/properties/channel/items/properties/channel_types",
                                "items": {
                                    "id": "/properties/channel/items/properties/channel_types/items",
                                    "properties": {
                                        "fk_channel_id": {
                                            "id": "/properties/channel/items/properties/channel_types/items/properties/fk_channel_id",
                                            "type": "integer"
                                        },
                                        "id": {
                                            "id": "/properties/channel/items/properties/channel_types/items/properties/id",
                                            "type": "integer"
                                        },
                                        "type": {
                                            "id": "/properties/channel/items/properties/channel_types/items/properties/type",
                                            "type": "string"
                                        }
                                    },
                                    "type": "object"
                                },
                                "type": "array"
                            },
                            "country_id": {
                                "id": "/properties/channel/items/properties/country_id",
                                "type": "integer"
                            },
                            "id": {
                                "id": "/properties/channel/items/properties/id",
                                "type": "integer"
                            }
                        },
                        "required": [
                            "channel_types",
                            "channel_mapping"

                        ],
                        "type": "object"
                    },
                    "type": "array"
                },
                "country": {
                    "id": "/properties/country",
                    "items": {
                        "id": "/properties/country/items",
                        "properties": {
                            "country_name": {
                                "id": "/properties/country/items/properties/country_name",
                                "type": "string"
                            },
                            "id": {
                                "id": "/properties/country/items/properties/id",
                                "type": "integer"
                            }
                        },
                        "type": "object"
                    },
                    "type": "array"
                }
            },
            "type": "object"
        }

    )
    .afterJSON(function(j) {
        console.log(JSON.stringify(j, 't', 4));
    })
    .toss();