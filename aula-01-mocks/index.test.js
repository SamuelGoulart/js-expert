const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert');


(async () => { 
    {
        const filePath = './mocks/empty-file-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }

    {
        const filePath = './mocks/four-items-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }

    {
        const filePath = './mocks/three-items-valid.csv'

        const result = await File.csvToJson(filePath)
        const expected = [
            {
              "name": "Samuel Goulart",
              "id": 123,
              "profession": "JavaScript Instructor",
              "birthDay": 1997
            },
            {
              "name": "Tiago",
              "id": 321,
              "profession": "JavaScript Specialist",
              "birthDay": 1942
            },
            {
              "name": "João",
              "id": 231,
              "profession": "Java Developer",
              "birthDay": 1992
            }
          ]

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
    }
})()