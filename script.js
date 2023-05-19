var app = new function() {
    this.el = document.getElementById('birds');
  
    this.birds = [];
  
    
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.birds.length > 0) {
        for (i = 0; i < this.birds.length; i++) {
          data += '<tr>';
          data += '<td>'+(i+1)+". " + this.birds[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')"  class="molting">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')"  class="fleeting">Delete</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.birds.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('watching');
      // Get the value
      var bird = el.value;
  
      if (bird) {
        // Add the new value
        this.birds.push(bird.trim());
        // Reset input value
        el.value = '';
        // Dislay the new list
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
      var el = document.getElementById('edit-watching');
      // Display value in the field
      el.value = this.birds[item];
      // Display fields
      document.getElementById('editz').style.display = 'block';
      self = this;
  
      document.getElementById('hatching btn').onsubmit = function() {
        // Get value
        var bird = el.value;
  
        if (birds) {
          // Edit value
          self.birds.splice(item, 1, bird.trim());
          // Display the new list
          self.FetchAll();
          // Hide fields
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      // Delete the current row
      this.birds.splice(item, 1);
      // Display the new list
      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Birds';
  
      if (data) {
          if(data ==1){
              name = 'Bird'
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = 'No ' + name;
      }
    };
    
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('editz').style.display = 'none';
  }