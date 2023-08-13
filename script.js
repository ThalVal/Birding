var app = new function() {
    this.el = document.getElementById('birds');
    this.birds = [];

    this.FetchAll = async function() {
        try {
            let response = await fetch('localhost:3001/api/birds'); // replace with your API endpoint
            this.birds = await response.json();

            let data = '';
            for (let bird of this.birds) {
                data += '<tr>';
                data += '<td>' + bird.name + '</td>';
                data += '<td><button onclick="app.Edit(' + bird.id + ')">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + bird.id + ')">Delete</button></td>';
                data += '</tr>';
            }
            this.el.innerHTML = data;
            this.Count(this.birds.length);
        } catch (error) {
            console.error("Error fetching birds:", error);
        }
    };

    this.Add = async function() {
        const birdName = document.getElementById('watching').value;
        if (birdName) {
            try {
                await fetch('localhost:3001/api/birds', { // replace with your API endpoint
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: birdName })
                });
                this.FetchAll();
            } catch (error) {
                console.error("Error adding bird:", error);
            }
        }
    };

    this.Edit = async function(id) {
        // Here, I assume you'd fetch the specific bird, edit it and then send an update.
        // This is a bit more involved than other operations.
        // As a starter, here's how you'd fetch a specific bird:
        const bird = this.birds.find(b => b.id === id);
        if (bird) {
            // Code to edit and send the update would go here
        }
    };

    this.Delete = async function(id) {
        try {
            await fetch('localhost:3001/api/birds/' + id, { // replace with your API endpoint
                method: 'DELETE'
            });
            this.FetchAll();
        } catch (error) {
            console.error("Error deleting bird:", error);
        }
    };

    this.Count = function(data) {
        var el = document.getElementById('counter');
        var name = 'Birds';
        if (data) {
            if (data == 1) name = 'Bird';
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

};

app.FetchAll();
