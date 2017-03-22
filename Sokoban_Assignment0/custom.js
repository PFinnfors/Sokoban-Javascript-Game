document.addEventListener("DOMContentLoaded", function (event) {

    //console.log(tileMap);
    //tileMap = mapsArray[Math.floor(Math.random() * mapsArray.length)];


    var r = 0;
    //while not done generating rows
    while (r < mapsArray[0].mapGrid.length) {

        var row = document.createElement("DIV");
        document.body.appendChild(row);

        row.setAttribute("id", "Div" + r);

        var c = 0;
        //while not done generating tiles
        while (c < mapsArray[0].mapGrid[r].length) {

            if (mapsArray[0].mapGrid[r][c] === " ") {

                var squareBlank = document.createElement("IMG");
                document.body.appendChild(squareBlank);

                MakeDoubleDigitID(squareBlank);

                squareBlank.setAttribute("src", "images/black.jpg");
                squareBlank.setAttribute("width", mapsArray[0].width);
                squareBlank.setAttribute("height", mapsArray[0].height);

                squareBlank.className = "tile tile-space";
            }
            if (mapsArray[0].mapGrid[r][c] === "W") {

                var squareWall = document.createElement("IMG");
                document.body.appendChild(squareWall);

                MakeDoubleDigitID(squareWall);

                squareWall.setAttribute("src", "images/brick-wall-185085_640.jpg");
                squareWall.setAttribute("width", mapsArray[0].width);
                squareWall.setAttribute("height", mapsArray[0].height);

                squareWall.className = "tile tile-wall";

            }
            if (mapsArray[0].mapGrid[r][c] === "B") {

                var squareMovable = document.createElement("IMG");
                document.body.appendChild(squareMovable);

                MakeDoubleDigitID(squareMovable);

                squareMovable.setAttribute("src", "images/crate-1143427_640.png");
                squareMovable.setAttribute("width", mapsArray[0].width);
                squareMovable.setAttribute("height", mapsArray[0].height);

            }
            if (mapsArray[0].mapGrid[r][c] === "P") {

                var player = document.createElement("IMG");
                document.body.appendChild(player);

                MakeDoubleDigitID(player);

                player.setAttribute("src", "images/adventurer-1197392_640.png");
                player.setAttribute("width", mapsArray[0].width);
                player.setAttribute("height", mapsArray[0].height);

                player.className = "entity entity-player";

            }
            if (mapsArray[0].mapGrid[r][c] === "G") {

                var squareGoal = document.createElement("IMG");
                document.body.appendChild(squareGoal);

                MakeDoubleDigitID(squareGoal);

                squareGoal.setAttribute("src", "images/download-1915753_640.png");
                squareGoal.setAttribute("width", mapsArray[0].width);
                squareGoal.setAttribute("height", mapsArray[0].height);

                squareGoal.className = "tile tile-goal";
            }

            c++;
        }

        r++;
    }

    //Generates an ID that's always double digits for simplicity
    function MakeDoubleDigitID(blockVar) {

        if (r < 10 && c < 10) {
            blockVar.setAttribute("id", "R" + "0" + r + "C" + "0" + c);
        }
        else {
            if (r < 10) {
                blockVar.setAttribute("id", "R" + "0" + r + "C" + c);
            }
            else {
                if (c < 10) {
                    blockVar.setAttribute("id", "R" + r + "C" + "0" + c);
                }
                else {
                    blockVar.setAttribute("id", "R" + r + "C" + c);
                }
            }

        }
    }


    //Function for replacing ID strings
    String.prototype.replaceAt = function (index, character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
    }

    //Function for checking classes
    function hasClass(elem, klass) {
        return (" " + elem.className + " ").indexOf(" " + klass + " ") > -1;
    }

    //Moves a block one step in the walking direction
    function moveBlock() {
        document.getElementById()
    }

    //What happens when the player is starting to move, step 4/4 in movement
    function movePlayer(directionID, aheadID, prevID, onClass) {

        //If you're walking into an empty tile...
        if (hasClass(document.getElementById(directionID), "tile-space")) {

            //Clears upcoming tile
            document.getElementById(directionID).classList.remove("tile");
            document.getElementById(directionID).classList.remove("tile-space");

            //Moving player
            document.getElementById(directionID).setAttribute("src", "images/adventurer-1197392_640.png");
            document.getElementById(directionID).classList.add("entity");
            document.getElementById(directionID).classList.add("entity-player");

            //Clears previous tile
            document.getElementById(player.id).classList.remove("entity");
            document.getElementById(player.id).classList.remove("entity-player");

            //Changing previous tile to either space or goal
            if (onClass === "tile-space") {
                document.getElementById(prevID).setAttribute("src", "images/black.jpg");
                document.getElementById(player.id).classList.add("tile");
                document.getElementById(player.id).classList.add("tile-space");
            }
            else {
                document.getElementById(prevID).setAttribute("src", "images/download-1915753_640.png");
                document.getElementById(player.id).classList.add("tile");
                document.getElementById(player.id).classList.add("tile-goal");
            }

            //Stores new player position
            player = document.getElementById(directionID);

        }
        else {
            //If you're trying to walk into a wall...
            if (hasClass(document.getElementById(directionID), "tile-wall")) {
                //Nothing happens
            }
            else {
                //If you're walking into a goal tile...
                if (hasClass(document.getElementById(directionID), "tile-goal")) {

                    //Clears upcoming tile
                    document.getElementById(directionID).classList.remove("tile");
                    document.getElementById(directionID).classList.remove("tile-goal");

                    //Moving player
                    document.getElementById(directionID).setAttribute("src", "images/adventurer-1197392_640.png");
                    document.getElementById(directionID).classList.add("entity");
                    document.getElementById(directionID).classList.add("entity-player");

                    //Clears previous tile
                    document.getElementById(player.id).classList.remove("entity");
                    document.getElementById(player.id).classList.remove("entity-player");

                    //Changing previous tile to either space or goal
                    if (onClass === "tile-space") {
                        document.getElementById(prevID).setAttribute("src", "images/black.jpg");
                        document.getElementById(player.id).classList.add("tile");
                        document.getElementById(player.id).classList.add("tile-space");
                    }
                    else {
                        document.getElementById(prevID).setAttribute("src", "images/download-1915753_640.png");
                        document.getElementById(player.id).classList.add("tile");
                        document.getElementById(player.id).classList.add("tile-goal");
                    }

                    //Stores new player position
                    player = document.getElementById(directionID);

                }
                else {
                    //If you're walking into a movable...
                    if (hasClass(document.getElementById(directionID), "entity-block")) {

                        //Moves the movable block
                        moveBlock();

                        //Clears upcoming tile
                        document.getElementById(directionID).classList.remove("entity");
                        document.getElementById(directionID).classList.remove("entity-block");

                        //Moving player
                        document.getElementById(directionID).setAttribute("src", "images/adventurer-1197392_640.png");
                        document.getElementById(directionID).classList.add("entity");
                        document.getElementById(directionID).classList.add("entity-player");

                        //Clears previous tile
                        document.getElementById(player.id).classList.remove("entity");
                        document.getElementById(player.id).classList.remove("entity-player");

                        //Changing previous tile to either space, goal or movable block
                        if (onClass === "tile-space") {
                            document.getElementById(prevID).setAttribute("src", "images/black.jpg");
                            document.getElementById(player.id).classList.add("tile");
                            document.getElementById(player.id).classList.add("tile-space");
                        }
                        else {
                            if (onClass === "tile-goal") {
                                document.getElementById(prevID).setAttribute("src", "images/download-1915753_640.png");
                                document.getElementById(player.id).classList.add("tile");
                                document.getElementById(player.id).classList.add("tile-goal");
                            }
                            else {
                                document.getElementById(prevID).setAttribute("src", "images/crate-1143427_640.png");
                                document.getElementById(player.id).classList.add("tile");
                                document.getElementById(player.id).classList.add("tile-goal");
                            }
                        }

                        //Stores new player position
                        player = document.getElementById(directionID);

                    }
                }
            }          
        }
    }

    //
    function TileConditionsLeft(inputDigitOne, inputDigitTwo) {
        //0x -If ID of player is less than 10 (first num is 0)
        if (inputDigitOne < 1) {

            //00 -Player can't walk outside map!
            if (inputDigitTwo < 1) {

            }
                //0[1-9] -ID of player is between 0 and 9
            else {
                inputDigitTwo = inputDigitTwo - 1;
            }

        }
            //1x -ID value is at least 10 (first num is > 0)
        else {
            if (inputDigitTwo > 0) {
                //1[1-9] -ID changes from a value above 10 to one still 10 or above
                inputDigitTwo = inputDigitTwo - 1;
            }
            else {
                //When the ID leaps from 10 to 9
                alert("You're moving from exactly 10 away from edge!");
                inputDigitOne = 0;
                inputDigitTwo = 9;
            }


        }
    }







    //Player is about to move left, step 3/4 in movement
    function moveLeft() {

        //Starting point for calculating ID of left tile is the player ID
        var leftID = player.id;
        console.log("leftID starting point: " + leftID);

        //Extracts values from the ID of the left tile
        var digitOne = parseInt(leftID.charAt(4), 10);
        var digitTwo = parseInt(leftID.charAt(5), 10);

        //Sends values to function selecting based on arithmetic conditions
        TileConditionsLeft(digitOne, digitTwo);

        //Converts back to string
        var digitOneStr = digitOne.toString(10);
        var digitTwoStr = digitTwo.toString(10);

        console.log("New position values are: " + digitOneStr + " " + digitTwoStr);

        //Stores and replaces the final values
        prevID = leftID;
        leftID = leftID.replaceAt(4, digitOneStr);
        leftID = leftID.replaceAt(5, digitTwoStr);
        //-----------------------

        //Gets the value of the tile ahead of the tile to the left as well, for movable blocks
        var aheadID = leftID;
        var digitThree = parseInt(aheadID.charAt(4), 10);
        var digitFour = parseInt(aheadID.charAt(5), 10);

        //Sends values to function selecting based on arithmetic conditions
        TileConditionsLeft(digitThree, digitFour);

        //Converts back to string (again)
        var digitThreeStr = digitThree.toString(10);
        var digitFourStr = digitFour.toString(10);

        aheadID = aheadID.replaceAt(4, digitThreeStr);
        aheadID = aheadID.replaceAt(5, digitFourStr);

        // ---------------------

        //Stores the class of the left tile for use in later function
        if (hasClass(document.getElementById(leftID), "tile-goal")) {
            var onClass = "tile-goal";
        }
        else {
            //If the tile to the left is a movable...
            if (hasClass(document.getElementById(leftID), "entity-block")) {
                var onClass = "entity-block";
            }
            else {
                var onClass = "tile-space";
            }
        }

        //Sends new data to the final movement function

        console.log("Came from: " + prevID);
        console.log("Went to: " + leftID);
        console.log("Is ahead: " + aheadID);
        console.log("Stepped onto class: " + onClass);

        movePlayer(leftID, prevID, aheadID, onClass);
    }

    //Player is about to move up, step 3/4 in movement
    function moveUp() {

        var digitOne = 0;
        var digitTwo = 0;

        var aboveID = player.id;

        if (hasClass(document.getElementById(aboveID), "tile-goal")) {
            var onClass = "tile-goal";
        }
        else {
            var onClass = "tile-space";
        }

        digitOne = parseInt(aboveID.charAt(1), 10);
        digitTwo = parseInt(aboveID.charAt(2), 10);

        //0x -If ID of player is less than 10 (first num is 0)
        if (digitOne < 1) {

            //00 -Player can't walk outside map!
            if (digitTwo < 1) {

            }
                //0[1-9] -ID of player is between 0 and 9
            else {
                digitTwo = digitTwo - 1;
            }

        }
            //1x -ID value is at least 10 (first num is > 0)
        else {
            if (digitTwo > 0) {
                //1[1-9] -ID changes from a value above 10 to one still above 10
                digitTwo = digitTwo - 1;

            }
            else {
                //When the ID leaps from 10 to 9
                //alert("You're moving from exactly 10 rows down!");
                digitOne = 0;
                digitTwo = 9;
            }


        }

        //Converts back to string
        var digitOneStr = digitOne.toString(10);
        var digitTwoStr = digitTwo.toString(10);

        //Finally, puts the new values into the new string
        prevID = aboveID;
        aboveID = aboveID.replaceAt(1, digitOneStr);
        aboveID = aboveID.replaceAt(2, digitTwoStr);

        aheadID = "z";
        movePlayer(aboveID, aheadID, prevID, onClass);

    }

    //Player is about to move right, step 3/4 in movement
    function moveRight() {

        var digitOne = 0;
        var digitTwo = 0;

        var rightID = player.id;

        if (hasClass(document.getElementById(rightID), "tile-goal")) {
            var onClass = "tile-goal";
        }
        else {
            var onClass = "tile-space";
        }

        digitOne = parseInt(rightID.charAt(4), 10);
        digitTwo = parseInt(rightID.charAt(5), 10);

        //C1x -If Col ID of player is at least 10 (first num is 1)
        if (digitOne > 0) {

            //C17 -Player can't walk outside map!
            if (digitTwo > 17) {

            }
            //C1[1-7] -ID of player is between 10 and 17
            else {
                digitTwo = digitTwo + 1;
            }

        }
            //C0x -Col ID value is at most 9 (second num is < 9)
        else {
            if (digitTwo < 9) {
                //C1[1-9] -ID changes from a value above 10 to one still above 10
                digitTwo = digitTwo + 1;

            }
            else {
                //When the ID leaps from 9 to 10
                //alert("You're moving from exactly 10 rows down!");
                digitOne = 1;
                digitTwo = 0;
            }


        }

        //Converts back to string
        var digitOneStr = digitOne.toString(10);
        var digitTwoStr = digitTwo.toString(10);

        //Finally, puts the new values into the new string
        prevID = rightID;
        rightID = rightID.replaceAt(4, digitOneStr);
        rightID = rightID.replaceAt(5, digitTwoStr);

        movePlayer(rightID, prevID, onClass);

    }

    //Player is about to move down, step 3/4 in movement
    function moveDown() {

        var digitOne = 0;
        var digitTwo = 0;

        var belowID = player.id;

        if (hasClass(document.getElementById(belowID), "tile-goal")) {
            var onClass = "tile-goal";
        }
        else {
            var onClass = "tile-space";
        }

        digitOne = parseInt(belowID.charAt(1), 10);
        digitTwo = parseInt(belowID.charAt(2), 10);

        //R0x -If ID of player is ...
        if (digitOne > 0) {

            //R00 -Player can't walk outside map!
            if (digitTwo > 4) {

            }
                //R0[1-9] -ID of player is between 0 and 9
            else {
                digitTwo = digitTwo + 1;
            }

        }
            //R1x -ID value is at least 10 (first num is > 0)
        else {
            if (digitTwo < 9) {
                //R1[1-9] -ID changes from a value above 10 to one still above 10
                digitTwo = digitTwo + 1;

            }
            else {
                //When the ID leaps from 9 to 10
                //alert("You're moving from exactly 10 rows down!");
                digitOne = 1;
                digitTwo = 0;
            }


        }

        //Converts back to string
        var digitOneStr = digitOne.toString(10);
        var digitTwoStr = digitTwo.toString(10);

        //Finally, puts the new values into the new string
        prevID = belowID;
        belowID = belowID.replaceAt(1, digitOneStr);
        belowID = belowID.replaceAt(2, digitTwoStr);

        movePlayer(belowID, prevID, onClass);
    }

    //Sends the key that was pressed to request movement, step 2/4
    function moveSelect(e) {

        switch (e.which) {
            case 37:
                //alert("LEFT");
                moveLeft();
                break;
            case 38:
                //alert("UP");
                moveUp();
                break;
            case 39:
                //alert("RIGHT");
                moveRight();
                break;
            case 40:
                //alert("DOWN");
                moveDown();
                break;
        }
    }

    //Checks for keypress, step 1/4 in movement
    document.addEventListener("keydown", function (e) {

        moveSelect(e);

    });







}, false);