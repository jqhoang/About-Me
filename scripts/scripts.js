

function showArtistForm() {
    var x = document.getElementById("addArtistForm");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("imageURL").value = "";

      artistName = document.getElementById("artistName");
      artistName.setAttribute("maxlength", "40");
      artistName.value = "";
      
      aboutArtist = document.getElementById("aboutArtist");
      aboutArtist.setAttribute("maxlength", "40");
      aboutArtist.value = "";
    } else {
      x.style.display = "none";
    }
  }

function deleteArtist(deleteArtistButton) {
    deleteArtistButton.parentNode.parentNode.parentNode.removeChild(deleteArtistButton.parentNode.parentNode);
}

function addArtist() {
    var artistTable = document.getElementById("artistTable");
    var artistName = document.getElementById("artistName").value;
    var aboutArtist = document.getElementById("aboutArtist").value;
    var artistImageURL = document.getElementById("imageURL").value;
    var row = artistTable.insertRow(0);
    row.setAttribute("id", "artistTableRow");

    var artistImageCell = row.insertCell(0);
    var artistImage = document.createElement('img');
    if (artistImageURL)
    {
        artistImage.src = artistImageURL;
    } else {
        artistImage.src = "https://randomuser.me/api/portraits/med/men/1.jpg"
    }
    artistImage.setAttribute("id", "artistImage");
    artistImageCell.appendChild(artistImage);

    var aboutArtistNameAndDescriptionCell = row.insertCell(1);
    aboutArtistNameAndDescriptionCell.setAttribute("id", "artistInfo");
    var artistNameP = document.createElement('p');
    var aboutArtistP = document.createElement('p');
    aboutArtistP.class = "artistDescription";
    var artistNamePText = document.createTextNode(artistName);
    var aboutArtistPText = document.createTextNode(aboutArtist);
    artistNameP.appendChild(artistNamePText);
    aboutArtistP.appendChild(aboutArtistPText);
    artistNameP.setAttribute("id", "artistNameP" );
    aboutArtistNameAndDescriptionCell.appendChild(artistNameP);
    aboutArtistNameAndDescriptionCell.appendChild(aboutArtistP);
    var deleteArtistButton = document.createElement('button');
    deleteArtistButton.setAttribute("id", "deleteArtistButton");
    deleteArtistButton.setAttribute("onclick", "deleteArtist(this)");
    deleteArtistButton.innerText = "Delete";
    aboutArtistNameAndDescriptionCell.appendChild(deleteArtistButton);
}