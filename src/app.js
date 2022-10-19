import express from "express"

const app =  express()
const PORT = 8080

let students = [
    {
        "codigo": 2155505,
        "nombre": "Cristian Rojas",
        "nivel": 9
    },
    {
        "codigo": 2155503,
        "nombre": "Ivon Alfonso",
        "nivel": 2
    },
    {
        "codigo": 2155504,
        "nombre": "Alejandro Sierra",
        "nivel": 10
    },
]

app.use(express.json())


app.get("/", (req, res) => {
    res.send("API Students")
})

app.get("/api/students", (req, res) => {
    res.json(students)
})

app.post("/api/students/add", (req, res) => {
    const student = req.body

    const newStudents = [...students, student]

    res.json(newStudents)
})

app.listen(PORT, () => console.log("Runnig"))