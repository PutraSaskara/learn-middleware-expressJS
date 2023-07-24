exports.home = (req, res) => {
    const welcome = `<div>
    <h1>Assignment Fullstack-Express Middleware</h1>
    <ul>
        <li>/user</li>
        <li>/request</li>
        <li>/print?text=koding</li>
        <li>/add?a=2&b=5</li>
        <li>/add-post</li>
    </ul>
    </div>`
    res.send(welcome)
}

exports.user = (req, res) => {
    res.send(`<h1 style='color: blue; text-align: center'>Routing berhasil</h1>`)
    console.log('routing user sedang berjalan')
}

exports.request = (req, res) => {
    res.send(`<h1 style='color: green; text-align: center'>Processing request</h1>`)
}

exports.print = (req, res) => {
    const text = req.query.text

    res.send(`<h1 style='color: orange; text-align: center'>${text}</h1>`)
}

exports.add = (req, res) => {
    const {a, b} = req.query
    
    const numA = parseInt(a)
    const numB = parseInt(b)
    
    const hasil = numA + numB
    res.send(`<h1 style='color: orange; text-align: center'>${hasil}</h1>`)
}

exports.reqGet = (req, res) => {
    const form =`
    <div style='width: 100%;'>
        <div style='width: 50%; margin: auto'>
            <h1>Create a post</h1>
            <form method="post" action="/add-post">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required>
                <br>
                <label for="description">Description:</label>
                <textarea id="description" name="description" required></textarea>
                <button style='margin-top: 30px' type=""submit>Submit</button>
            </form>
        </div>
    </div>`
    res.send(form)
}

exports.reqPost = (req, res) => {
    const {title, description} = req.body

    const confirmation = "<h1>Hore your post with title created</h1>"
    res.send(confirmation)
}