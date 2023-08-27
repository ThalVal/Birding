var app = new function() {
    this.el = document.getElementById('birds');
    this.birds = [];

    this.FetchAll = async function() {
        try {
            let response = await fetch('https://birding-b6b6fd8e3a47.herokuapp.com/api/birds');
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
                await fetch('https://birding-b6b6fd8e3a47.herokuapp.com/api/birds', {
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
        const bird = this.birds.find(b => b.id === id);
        if (!bird) return;

        // Prompt the user to edit the bird's name
        const newName = prompt("Edit bird name", bird.name);

        // If the user cancels the prompt or doesn't change the value, don't proceed
        if (!newName || newName === bird.name) return;

        try {
            await fetch('https://birding-b6b6fd8e3a47.herokuapp.com/api/birds' + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newName })
            });

            this.FetchAll();
        } catch (error) {
            console.error("Error updating bird:", error);
        }
    };


    this.Delete = async function(id) {
        try {
            await fetch('https://birding-b6b6fd8e3a47.herokuapp.com/api/birds' + id, {
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
