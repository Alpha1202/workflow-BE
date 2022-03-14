
Workflow Editor - A smart workflow editor for great researchers.
=======

## Getting Started
Clone the Repo.
-------------
`git clone https://github.com/Alpha1202/workflow-BE.git`

## Prerequisites
The following tools will be needed to run this application successfully:
* Node v10.15.0 or above
* Npm v6.4 or above
* mongodb

## Installation
**On your Local Machine**
- Pull the [dev](https://github.com/Alpha1202/workflow-BE.git) branch off this repository
- Run `yarn i` to install all dependencies
- Run `yarn run dev` to start the app
- Access endpoints on **localhost:3000**

---

## API Spec
The preferred JSON object to be returned by the API should be structured as follows:

### Get Workflow
```source-json
{
    "status": "success",
    "data": [
        {
            "_id": "622d992e32338474a7503d3d",
            "name": "calibration project",
            "steps": [
                {
                    "id": "1",
                    "nodeId": "1",
                    "type": "input",
                    "data": {
                        "label": "Workflow"
                    },
                    "position": {
                        "x": 350,
                        "y": 0
                    },
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "2",
                    "nodeId": "7",
                    "data": {
                        "label": "Place a beaker with 1000ul of distilled H20 on the balance and tare"
                    },
                    "position": {
                        "x": 350,
                        "y": 100
                    },
                    "style": {
                        "width": 180
                    },
                    "step": {
                        "nodeId": "2",
                        "label": "Prepare balance",
                        "status": "done"
                    },
                    "subSteps": [
                        {
                            "nodeId": "7",
                            "label": "Place a beaker with 1000ul of distilled H20 on the balance and tare",
                            "status": "undone"
                        }
                    ]
                },
                {
                    "id": "3",
                    "nodeId": "3",
                    "status": "undone",
                    "data": {
                        "label": "Place a new pipette tip on the pipettor"
                    },
                    "position": {
                        "x": 350,
                        "y": 250
                    },
                    "sourcePosition": "left",
                    "style": {
                        "width": 180
                    },
                    "step": {
                        "nodeId": "3",
                        "label": "Place a new pipette tip on the pipettor",
                        "status": "undone"
                    },
                    "subSteps": []
                },
                {
                    "id": "4",
                    "nodeId": "4",
                    "status": "undone",
                    "targetPosition": "top",
                    "position": {
                        "x": 0,
                        "y": 350
                    },
                    "data": {
                        "label": "Weigh the pipettes at 100% volume five times"
                    },
                    "style": {
                        "width": 180
                    },
                    "step": {
                        "nodeId": "4",
                        "label": "Weigh the pipettes at 100% volume five times",
                        "status": "undone"
                    },
                    "subSteps": [
                        {
                            "nodeId": "8",
                            "label": "Aspirate and dispense 100% of the volume into the beaker",
                            "status": "undone"
                        },
                        {
                            "nodeId": "9",
                            "label": "Record the weight in the table in step 6.4",
                            "status": "undone"
                        },
                        {
                            "nodeId": "10",
                            "label": "Tare the balance",
                            "status": "undone"
                        },
                        {
                            "nodeId": "11",
                            "label": "Repeat steps 3.1 to 3.3 four more times",
                            "status": "undone"
                        }
                    ]
                },
                {
                    "id": "5",
                    "nodeId": "8",
                    "status": "undone",
                    "data": {
                        "label": "Aspirate and dispense 100% of the volume into the beaker"
                    },
                    "sourcePosition": "right",
                    "targetPosition": "left",
                    "position": {
                        "x": 350,
                        "y": 350
                    },
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "6",
                    "nodeId": "9",
                    "status": "undone",
                    "data": {
                        "label": "Record the weight in the table in step 6.4"
                    },
                    "position": {
                        "x": 700,
                        "y": 350
                    },
                    "targetPosition": "left",
                    "sourcePosition": "bottom",
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "7",
                    "nodeId": "10",
                    "status": "undone",
                    "data": {
                        "label": "Tare the balance"
                    },
                    "position": {
                        "x": 700,
                        "y": 500
                    },
                    "targetPosition": "top",
                    "sourcePosition": "left",
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "8",
                    "nodeId": "11",
                    "status": "undone",
                    "data": {
                        "label": "Repeat steps 3.1 to 3.3 four more times"
                    },
                    "position": {
                        "x": 350,
                        "y": 500
                    },
                    "sourcePosition": "left",
                    "targetPosition": "right",
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "9",
                    "nodeId": "5",
                    "status": "undone",
                    "data": {
                        "label": "Data Tables: Weight of water from step 6.3"
                    },
                    "position": {
                        "x": 350,
                        "y": 650
                    },
                    "targetPosition": "left",
                    "style": {
                        "width": 180
                    },
                    "step": {
                        "nodeId": "5",
                        "label": "Data Tables: Weight of water from step 6.3",
                        "status": "undone"
                    },
                    "subSteps": []
                },
                {
                    "id": "10",
                    "nodeId": "6",
                    "status": "undone",
                    "type": "output",
                    "data": {
                        "label": "Calculate Mean, Std. Deviation, Accuracy and Precision"
                    },
                    "position": {
                        "x": 350,
                        "y": 800
                    },
                    "style": {
                        "width": 180
                    },
                    "step": {
                        "nodeId": "6",
                        "label": "Calculate Mean, Std. Deviation, Accuracy and Precision",
                        "status": "undone"
                    },
                    "subSteps": []
                },
                {
                    "id": "e1-2",
                    "source": "1",
                    "target": "2",
                    "animated": false,
                    "label": "Prepare balance",
                    "arrowHeadType": "arrowclosed"
                },
                {
                    "id": "e2-3",
                    "source": "2",
                    "target": "3",
                    "animated": false,
                    "arrowHeadType": "arrowclosed",
                    "label": "Place a new pipette tip"
                },
                {
                    "id": "e3-4",
                    "source": "3",
                    "target": "4",
                    "animated": false,
                    "type": "step",
                    "arrowHeadType": "arrowclosed",
                    "label": "Weigh the pipettes at 100%"
                },
                {
                    "id": "e4-5",
                    "source": "4",
                    "target": "5",
                    "animated": true,
                    "labelStyle": {
                        "fill": "#f6ab6c",
                        "fontWeight": 700
                    },
                    "style": {
                        "stroke": "#f6ab6c"
                    },
                    "label": "No?"
                },
                {
                    "id": "e5-6",
                    "source": "5",
                    "target": "6",
                    "animated": true,
                    "labelStyle": {
                        "fill": "#f6ab6c",
                        "fontWeight": 700
                    },
                    "style": {
                        "stroke": "#f6ab6c"
                    },
                    "label": "Record the weight"
                },
                {
                    "id": "e6-7",
                    "source": "6",
                    "target": "7",
                    "animated": true,
                    "labelStyle": {
                        "fill": "#f6ab6c",
                        "fontWeight": 700
                    },
                    "style": {
                        "stroke": "#f6ab6c"
                    },
                    "label": "Tare the balance"
                },
                {
                    "id": "e7-8",
                    "source": "7",
                    "target": "8",
                    "animated": true,
                    "labelStyle": {
                        "fill": "#f6ab6c",
                        "fontWeight": 700
                    },
                    "style": {
                        "stroke": "#f6ab6c"
                    },
                    "label": "Repeat"
                },
                {
                    "id": "e8-4",
                    "source": "8",
                    "target": "4",
                    "type": "step",
                    "style": {
                        "stroke": "#f6ab6c"
                    },
                    "label": "Repeat steps 3.1 to 3.3 four more times",
                    "animated": true,
                    "labelStyle": {
                        "fill": "#f6ab6c",
                        "fontWeight": 700
                    }
                },
                {
                    "id": "e4-9",
                    "source": "4",
                    "target": "9",
                    "type": "step",
                    "animated": false,
                    "arrowHeadType": "arrowclosed",
                    "label": "Yes? Record entry in data table"
                },
                {
                    "id": "e9-10",
                    "source": "9",
                    "target": "10",
                    "type": "step",
                    "label": "Calculate Mean, Std. Deviation, Accuracy and Precision",
                    "animated": false,
                    "arrowHeadType": "arrowclosed"
                }
            ]
        }
    ]
}
```
### Save Workflow
```source-json
{
    "status": "success",
    "data": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}
```


### Errors and Status Codes
If a request fails, expect errors in the following format:

```source-json
 {
    status: 'Request Failed',
    error
}
```
### Other status codes:

200 for success

500 for server error and/or general errors caught in the try/catch

404 for Not found requests, when a resource can't be found to fulfill the request


Endpoints:
----------

### Get Workflow:

`GET /api/v1/workflow`

Example request body:

```source-json
none
```

No authentication required, returns the saved workflow



### Save Workflow:

`PUT /api/v1/save`

Example request body:

```source-json
{
            "_id": "622d9b7632338474a7503d3e",
            "name": "calibration project",
            "steps": [
                {
                    "id": "1",
                    "nodeId": "1",
                    "type": "input",
                    "data": {
                        "label": "Workflow"
                    },
                    "position": {
                        "x": 350,
                        "y": 0
                    },
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "2",
                    "nodeId": "7",
                    "status": "undone",
                    "data": {
                        "label": "Place a beaker with 1000ul of distilled H20 on the balance and tare"
                    },
                    "position": {
                        "x": 350,
                        "y": 100
                    },
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "3",
                    "nodeId": "3",
                    "status": "undone",
                    "data": {
                        "label": "Place a new pipette tip on the pipettor"
                    },
                    "position": {
                        "x": 350,
                        "y": 250
                    },
                    "sourcePosition": "left",
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "4",
                    "nodeId": "4",
                    "status": "undone",
                    "targetPosition": "top",
                    "position": {
                        "x": 0,
                        "y": 350
                    },
                    "data": {
                        "label": "Weigh the pipettes at 100% volume five times"
                    },
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "5",
                    "nodeId": "8",
                    "status": "undone",
                    "data": {
                        "label": "Aspirate and dispense 100% of the volume into the beaker"
                    },
                    "sourcePosition": "right",
                    "targetPosition": "left",
                    "position": {
                        "x": 350,
                        "y": 350
                    },
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "6",
                    "nodeId": "9",
                    "status": "undone",
                    "data": {
                        "label": "Record the weight in the table in step 6.4"
                    },
                    "position": {
                        "x": 700,
                        "y": 350
                    },
                    "targetPosition": "left",
                    "sourcePosition": "bottom",
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "7",
                    "nodeId": "10",
                    "status": "undone",
                    "data": {
                        "label": "Tare the balance"
                    },
                    "position": {
                        "x": 700,
                        "y": 500
                    },
                    "targetPosition": "top",
                    "sourcePosition": "left",
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "8",
                    "nodeId": "11",
                    "status": "undone",
                    "data": {
                        "label": "Repeat steps 3.1 to 3.3 four more times"
                    },
                    "position": {
                        "x": 350,
                        "y": 500
                    },
                    "sourcePosition": "left",
                    "targetPosition": "right",
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "9",
                    "nodeId": "5",
                    "status": "undone",
                    "data": {
                        "label": "Data Tables: Weight of water from step 6.3"
                    },
                    "position": {
                        "x": 350,
                        "y": 650
                    },
                    "targetPosition": "left",
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "10",
                    "nodeId": "6",
                    "status": "undone",
                    "type": "output",
                    "data": {
                        "label": "Calculate Mean, Std. Deviation, Accuracy and Precision"
                    },
                    "position": {
                        "x": 350,
                        "y": 800
                    },
                    "style": {
                        "width": 180
                    }
                },
                {
                    "id": "e1-2",
                    "source": "1",
                    "target": "2",
                    "animated": false,
                    "label": "Prepare balance",
                    "arrowHeadType": "arrowclosed"
                },
                {
                    "id": "e2-3",
                    "source": "2",
                    "target": "3",
                    "animated": false,
                    "arrowHeadType": "arrowclosed",
                    "label": "Place a new pipette tip"
                },
                {
                    "id": "e3-4",
                    "source": "3",
                    "target": "4",
                    "animated": false,
                    "type": "step",
                    "arrowHeadType": "arrowclosed",
                    "label": "Weigh the pipettes at 100%"
                },
                {
                    "id": "e4-5",
                    "source": "4",
                    "target": "5",
                    "animated": true,
                    "labelStyle": {
                        "fill": "#f6ab6c",
                        "fontWeight": 700
                    },
                    "style": {
                        "stroke": "#f6ab6c"
                    },
                    "label": "No?"
                },
                {
                    "id": "e5-6",
                    "source": "5",
                    "target": "6",
                    "animated": true,
                    "labelStyle": {
                        "fill": "#f6ab6c",
                        "fontWeight": 700
                    },
                    "style": {
                        "stroke": "#f6ab6c"
                    },
                    "label": "Record the weight"
                },
                {
                    "id": "e6-7",
                    "source": "6",
                    "target": "7",
                    "animated": true,
                    "labelStyle": {
                        "fill": "#f6ab6c",
                        "fontWeight": 700
                    },
                    "style": {
                        "stroke": "#f6ab6c"
                    },
                    "label": "Tare the balance"
                },
                {
                    "id": "e7-8",
                    "source": "7",
                    "target": "8",
                    "animated": true,
                    "labelStyle": {
                        "fill": "#f6ab6c",
                        "fontWeight": 700
                    },
                    "style": {
                        "stroke": "#f6ab6c"
                    },
                    "label": "Repeat"
                },
                {
                    "id": "e8-4",
                    "source": "8",
                    "target": "4",
                    "type": "step",
                    "style": {
                        "stroke": "#f6ab6c"
                    },
                    "label": "Repeat steps 3.1 to 3.3 four more times",
                    "animated": true,
                    "labelStyle": {
                        "fill": "#f6ab6c",
                        "fontWeight": 700
                    }
                },
                {
                    "id": "e4-9",
                    "source": "4",
                    "target": "9",
                    "type": "step",
                    "animated": false,
                    "arrowHeadType": "arrowclosed",
                    "label": "Yes? Record entry in data table"
                },
                {
                    "id": "e9-10",
                    "source": "9",
                    "target": "10",
                    "type": "step",
                    "label": "Calculate Mean, Std. Deviation, Accuracy and Precision",
                    "animated": false,
                    "arrowHeadType": "arrowclosed"
                }
            ]
        }
```

No authentication required, returns an object containing success status

Required fields: `payload : workflow object`,

### .env sample:

`DEV_DATABASE_URI:`