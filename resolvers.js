module.exports = {
    Query: {
        hello: () => 'Hello, GraphQL!',
    },
    Mutation: {
        saveData: (_, args) => {
            const { userData, heartRateData, hrvData } = args;
            // Implement your logic to save data here
            console.log('Received userData:', userData);
            console.log('Received heartRateData:', heartRateData);
            console.log('Received hrvData:', hrvData);

            return 'Data saved successfully!';
        },
    },
};
