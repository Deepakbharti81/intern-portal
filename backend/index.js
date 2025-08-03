const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/user', (req, res) => {
    res.json(
        {
            name: "Deepak Bharti",
            course: "BCA",
            college: "Shoolini University",
            profileImage: "https://i.pravatar.cc/150?u=deepak"
        }

    );
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
