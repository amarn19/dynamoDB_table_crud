const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });

const dynamodb = new AWS.DynamoDB();

dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// //creating table

// dynamodb.createTable({
//     TableName: "demo",
//     AttributeDefinitions: [
//         {
//             AttributeName: "user_id",
//             AttributeType: "S"
//         },
//         {
//             AttributeName: "timestamp",
//             AttributeType: "N"
//         }
//     ],
//     KeySchema: [
//         {
//             AttributeName: "user_id",
//             KeyType: "HASH"
//         },
//         {
//             AttributeName: "timestamp",
//             KeyType: "RANGE"
//         }
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 1,
//         WriteCapacityUnits: 1
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// //Describe table

// dynamodb.describeTable({
//     TableName: "demo"
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

//updating table 

// dynamodb.updateTable({
//     TableName: "demo",
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 2,
//         WriteCapacityUnits: 1
//     }
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// //deleting table 

// dynamodb.deleteTable({
//     TableName: "demo"
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// dynamodb.listTables({}, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });