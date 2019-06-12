$(function(){

	var apiData = {"acrossmap":null,"admin":false,"answers":{"across":["SEA","PESTLE","WISP","APT","ARARAT","ANNA","TIT","TEXASRANGER","IDAHO","WHEW","EEK","REGIONAL","CRAZE","EMITTED","ADMIRER","SIR","TRADEON","CLOTHESHANGER","PREPPED","DIN","AFFAIRS","RESTIVE","DEALS","MERCUTIO","ARK","HOBO","AXMEN","PRETAMANGER","ERA","TERI","AYEAYE","NAT","STYX","RHYMES","USE"],"down":["SATIRES","EPIDEMIC","ATTAGIRL","PATOOT","ERE","SAX","TRAWL","LASH","ETRE","WAN","INGEAR","SNEEZE","PARKER","AWCMON","HIT","NETHER","ADREPS","RING","ADHERE","DEADER","ASP","OPAL","TRISHA","EDITMENU","RIVIERAS","NEONATE","ADAPTS","FERRET","FAKERY","SCARES","TUX","MONEY","OMAR","BAYH","TIX","GAM","EYE"]},"author":"Peter Gordon","autowrap":null,"bbars":null,"circles":null,"clues":{"across":["1. Poseidon's domain","4. Mortar accompanier","10. Swirl of smoke","14. Well-suited","15. Noah's landing place","16. Tennis's Kournikova","17. ___ for tat","18. Lone Star State baseball player","20. State whose license plates say &quot;Famous Potatoes&quot;","22. &quot;That was a close one!&quot;","23. &quot;It's a mouse!&quot;","24. Not national, as an airline","27. Fad","29. Gave off, as radiation","30. &quot;Secret&quot; person who writes a love note","32. What Marcie calls Peppermint Patty in &quot;Peanuts&quot;","33. Take unfair advantage of","35. What you might drape a dress or shirt on in a closet","40. Got ready to be operated on","41. Loud noise","43. Foreign ___ (international matters)","46. Fidgety","49. Hands out cards","50. Young gallant in &quot;Romeo and Juliet&quot;","51. Noah's craft","52. Drifter","55. Lumberjacks","56. Sandwich chain whose name is French for &quot;ready to eat&quot;","60. Time in history","61. Actress Hatcher of &quot;Desperate Housewives&quot;","62. Sailor's affirmative","63. Singer ___ King Cole","64. River of the underworld","65. See 59-Down","66. &quot;What's the ___?&quot; (pessimist's cry)"],"down":["1. Works like &quot;Animal Farm&quot; and &quot;Gulliver's Travels&quot;","2. Rapid spread of a disease","3. &quot;Way to go, sister!&quot;","4. Tushie","5. Bard's &quot;before&quot;","6. &quot;Wailing&quot; instrument","7. Fish by dragging a net","8. Place for mascara","9. Raison d'___","10. Pallid","11. Out of neutral, as a car","12. &quot;Gesundheit!&quot; elicitor","13. &quot;Sex and the City&quot; star Sarah Jessica ___","19. &quot;You've got to be kidding me!&quot;","21. Top 10 song","25. Lower in position","26. Ones selling commercial time, informally","28. Boxing venue","30. Cling (to)","31. ___ than a doornail","34. Egyptian cobra","36. October's birthstone","37. Country singer Yearwood","38. Where to find &quot;Cut&quot; and &quot;Paste&quot;","39. Coastal resort areas","42. Someone who was literally born yesterday","43. Makes a screenplay out of","44. Search (out)","45. Flimflam","47. Frightens","48. Men's formal attire, informally","50. &quot;A blessing that is of no advantage to us excepting when we part with it,&quot; according to Ambrose Bierce","53. Minnesota representative Ilhan ___","54. 1990s Indiana governor Evan","57. Box office purchases, for short","58. Pod of whales","59. With 65-Across, what the last words of 18-, 35- and 56-Across are to each other"]},"code":null,"copyright":"2019, The New York Times","date":"5/6/2019","dow":"Monday","downmap":null,"editor":"Will Shortz","grid":["S","E","A",".","P","E","S","T","L","E",".","W","I","S","P","A","P","T",".","A","R","A","R","A","T",".","A","N","N","A","T","I","T",".","T","E","X","A","S","R","A","N","G","E","R","I","D","A","H","O",".",".","W","H","E","W",".","E","E","K","R","E","G","I","O","N","A","L",".",".","C","R","A","Z","E","E","M","I","T","T","E","D",".","A","D","M","I","R","E","R","S","I","R",".",".","T","R","A","D","E","O","N",".",".",".",".","C","L","O","T","H","E","S","H","A","N","G","E","R",".",".",".",".","P","R","E","P","P","E","D",".",".","D","I","N","A","F","F","A","I","R","S",".","R","E","S","T","I","V","E","D","E","A","L","S",".",".","M","E","R","C","U","T","I","O","A","R","K",".","H","O","B","O",".",".","A","X","M","E","N","P","R","E","T","A","M","A","N","G","E","R",".","E","R","A","T","E","R","I",".","A","Y","E","A","Y","E",".","N","A","T","S","T","Y","X",".","R","H","Y","M","E","S",".","U","S","E"],"gridnums":[1,2,3,0,4,5,6,7,8,9,0,10,11,12,13,14,0,0,0,15,0,0,0,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,0,0,19,0,0,0,0,20,0,0,21,0,0,0,22,0,0,0,0,23,0,0,24,0,0,0,0,25,26,0,0,0,27,28,0,0,0,29,0,0,0,0,0,0,0,30,31,0,0,0,0,0,32,0,0,0,0,33,0,34,0,0,0,0,0,0,0,0,35,0,36,37,0,0,0,0,0,0,0,38,39,0,0,0,0,40,0,0,0,0,0,0,0,0,41,0,42,43,44,45,0,0,0,0,0,46,0,47,48,0,0,0,49,0,0,0,0,0,0,50,0,0,0,0,0,0,0,51,0,0,0,52,53,54,0,0,0,55,0,0,0,0,56,0,0,57,0,0,0,0,58,59,0,0,60,0,0,61,0,0,0,0,62,0,0,0,0,0,0,63,0,0,64,0,0,0,0,65,0,0,0,0,0,0,66,0,0],"hastitle":false,"hold":null,"id":null,"id2":null,"interpretcolors":null,"jnotes":null,"key":null,"mini":null,"navigate":true,"notepad":null,"publisher":"The New York Times","rbars":null,"shadecircles":null,"size":{"cols":15,"rows":15},"target":"/Crossword?date=5/6/2019","title":"NY TIMES, MON, MAY 06, 2019","track":null,"type":null,"uniclue":false,"valid":true}

	const answerStructure = {};
	var gridData = {};
	var puzzleData= {};
	var rows = 15;
	var cols = 15;
	var totalCells = rows * cols ;
	var selectedClueNum = 0;
	var gridnums=[];
	var ref = new Firebase('https://puzzle-crswrd.firebaseio.com');
	var userId, userName = "";
	var myPlayerNumber="";






	function getAllUrlParams(url) {
		var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
		var obj = {};
		if (queryString) {
			queryString = queryString.split('#')[0];
			var arr = queryString.split('&');
			for (var i = 0; i < arr.length; i++) {  
				var a = arr[i].split('=');
				var paramName = a[0];
				var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
				paramName = paramName.toLowerCase();
				if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
				if (paramName.match(/\[(\d+)?\]$/)) {
					var key = paramName.replace(/\[(\d+)?\]/, '');
					if (!obj[key]) obj[key] = [];
					if (paramName.match(/\[\d+\]$/)) {
						var index = /\[(\d+)\]/.exec(paramName)[1];
						obj[key][index] = paramValue;
					} else {
						obj[key].push(paramValue);
					}
				} else {
					if (!obj[paramName]) {
						obj[paramName] = paramValue;
					} else if (obj[paramName] && typeof obj[paramName] === 'string'){
						obj[paramName] = [obj[paramName]];
						obj[paramName].push(paramValue);
					} else {
						obj[paramName].push(paramValue);
					}
				}
			}
		}
		return obj;
	}

	let parameters = getAllUrlParams(window.location.href);
	let id = parameters.id ? parameters.id : '';
	let isDebug = parameters.isdebug === true ? true : (parameters.isdebug === 'true');
	let isTestUser = parameters.istestuser === true ? true : (parameters.istestuser === 'true');
	var gameID = document.location.pathname ? document.location.pathname.slice(1, 22) === "Multiplayer-Crossword" ? id : '' : ''

	

	function generateGridData(){
		var cellLabel;
		// var setCell = false;

		for (var i = 0; i < totalCells; i++) {
			if (apiData.gridnums[i] === 0) {
				cellLabel = ""
			}else{
				cellLabel = apiData.gridnums[i];
			}

			gridData[i+1] = {
				label: cellLabel,
				letter: apiData.grid[i],
				showLetter:false,
				status: null,
				setfield:false

			}
		}

		console.log(gridData)
		ref.child("gameData").set(apiData);
		ref.child(gameID+"/gridData").set(gridData);

	}



	function generateAnswerStructure() {
		var clueAcross = apiData.clues.across;
		var clueDown = apiData.clues.down;


		for (var i = 0; i < clueAcross.length ; i++) {
			var clue = clueAcross[i];
			var splittedClue = clue.split(".");
			var gridNum = splittedClue[0];
			var indexName = gridNum + "_across";
			var connectedCellsArray = [];
			var startCell = apiData.gridnums.indexOf(Number(gridNum))+1;

			for (var j = 0; j < apiData.answers.across[i].length; j++) {
				connectedCellsArray.push(startCell + j)
			}

			answerStructure[indexName] = {

				answer: apiData.answers.across[i],
				length: apiData.answers.across[i].length,
				connectedCells : connectedCellsArray

			}


		}

		for (var i = 0; i < clueDown.length; i++) {
			var clue = clueDown[i];
			var splittedClue = clue.split(".");
			var gridNum = splittedClue[0];
			var indexName = gridNum + "_down";
			var connectedCellsArray = [];
			var startCell = apiData.gridnums.indexOf(Number(gridNum))+1;

			for (var j = 0; j < apiData.answers.down[i].length; j++) {
				connectedCellsArray.push(startCell + (j*cols))
			}

			answerStructure[indexName] = {

				answer: apiData.answers.down[i],
				length: apiData.answers.down[i].length,
				connectedCells : connectedCellsArray,
			}


		}

		console.log(answerStructure)

	}


	function getPuzzleLayout(layoutData){
		console.log(layoutData)
		$board = $("#gameBoard");
		$board.empty();
		var count = 0;


		for (var i = 1; i <= totalCells; i++) {

			count ++ ;
			if (count == 1) {
				$board.append("<tr>");
			}else if(count>14) {
				count = 0;
			}

			if(!layoutData[i].showLetter) {
				if (layoutData[i].letter === "."){
					$board.children().last().append('<td id="'+i+'"class="deadBlock"></td>');

				}else{

					$board.children().last().append('<td id="'+i+'"class="clueNum" data-gridNum="'+layoutData[i].label+'"><label>'+layoutData[i].label+'</label><input maxlength="1" readonly/>'+"</td>");
				}
			}

			else if ((layoutData[i].showLetter) && (layoutData[i].status === "correct")) {
				$board.children().last().append('<td id="'+i+'"class="clueNum bg-green" data-gridNum="'+layoutData[i].label+'"><label>'+layoutData[i].label+'</label><input maxlength="1" value="'+layoutData[i].letter+'" readonly/>'+"</td>");
			}

			else if ((layoutData[i].showLetter) && (layoutData[i].status === "wrong")) {
				$board.children().last().append('<td id="'+i+'"class="clueNum higlight-red" data-gridNum="'+layoutData[i].label+'"><label>'+layoutData[i].label+'</label><input maxlength="1" readonly value="'+layoutData[i].letter+'"/></td>');
			}

		}


	}

	function showClues(apidata){
		var cluesArrayAcross = apiData.clues.across;
		var cluesArrayDown = apiData.clues.down;

		$("#clueBox").empty();
		$("#clueBox").append('<h3>Clues</h3><div id="cluesDown" class="col-md-6"><h4>Down:</h4>')
		for (var i = 0; i< cluesArrayDown.length; i++) {
			$("#cluesDown").append("<p>"+cluesArrayDown[i]+"<p>");
		}
		$("#clueBox").append('<div id="cluesAcross" class="col-md-6"><h4>Across:</h4>')

		for (var i = 0; i < cluesArrayAcross.length; i++) {
			$("#cluesAcross").append("<p>"+cluesArrayAcross[i]+"<p>");
		}

	}

	function fetchClue() {
		$("td").removeClass("highlight-blue");
		$(this).addClass("highlight-blue");
		var gridNumber,acrossKey,downKey;
		gridNumber = Number($(this).attr("data-gridNum"));
		selectedClueNum= gridNumber;
		acrossKey = gridNumber+ "_across";
		downKey = gridNumber+ "_down";

		$("#clueBox").empty();


		if ((answerStructure[downKey]) && (answerStructure[acrossKey])){
			var valueAcross = answerStructure[acrossKey].answer;
			var indexAcross = apiData.answers.across.indexOf(valueAcross);
			var valueDown = answerStructure[downKey].answer;
			var indexDown = apiData.answers.down.indexOf(valueDown);


			$("input#down input#across").attr("disabled",false)
			$("input#across input#down").attr("checked",false)

			$("#clueBox").append('<h4>Across:</h4><p>'+ apiData.clues.across[indexAcross] +'&nbsp; ('+ valueAcross.length + ")</p><br/>");
			$("#clueBox").append('<h4>Down:</h4><p>'+ apiData.clues.down[indexDown] + '&nbsp; ('+ valueDown.length +")</p><br/>");

		} else if ((answerStructure[acrossKey]) && !(answerStructure[downKey])){
			var value = answerStructure[acrossKey].answer;
			var index = apiData.answers.across.indexOf(value);

			$("input#down").attr("checked",false).attr("disabled",true)
			$("input#across").attr("disabled",false).attr("checked",true)

			$("#clueBox").append('<h4>Across:</h4><p>'+ apiData.clues.across[index] +'&nbsp; ('+ value.length + ")</p><br/>");
		} 
		else if ((!answerStructure[acrossKey]) && (answerStructure[downKey])) {
			var value = answerStructure[downKey].answer;
			var index = apiData.answers.down.indexOf(value);
			$("input#across").attr("checked",false).attr("disabled",true);
			$("input#down").attr("disabled",false).attr("checked",true)

			$("#clueBox").append('<h4>Down:</h4><p>'+ apiData.clues.down[index] + '&nbsp; ('+ value.length +")</p><br/>");
		}
		else if((!answerStructure[acrossKey]) && (!answerStructure[downKey])) {
			$("input#down input#across").attr("disabled",true)
			$("input#across input#down").attr("checked",false)
		}

	}

	function compareResult(selectedClueNum,direction,value) {
		var key = selectedClueNum+"_"+direction;
		var input = value;
		console.log(answerStructure[key])
		var correctAnswer= answerStructure[key].answer;

		if (value === correctAnswer){
			for (var i = 0; i < correctAnswer.length; i++) {
				var gridCell = answerStructure[key].connectedCells[i];

				if (puzzleData[gridCell].status !== "correct") {
					puzzleData[gridCell].showLetter = true;
					puzzleData[gridCell].letter = correctAnswer.charAt(i);
					puzzleData[gridCell].status = "correct";


				}

			}
		}
		else{
			for (var i = 0; i < correctAnswer.length; i++) {
				var gridCell = answerStructure[key].connectedCells[i];

				if (puzzleData[gridCell].status !== "correct") {
					puzzleData[gridCell].showLetter = true;
					puzzleData[gridCell].letter = input.charAt(i);
					puzzleData[gridCell].status = "wrong";


				}

			}
		}

		ref.child(gameID+"/gridData").transaction(function (currentData) {
			return puzzleData;
		});

		
		updateTurn();

	}

	

	function handleClickOfCheck() {
		var direction= $("input[name='direction']:checked").attr("id");
		var value = $("#userInput").val().toUpperCase();

		compareResult(selectedClueNum,direction,value);
		$("#userInput").val("");
	}





	function getToken(){
		try {
			token = window.QTalkApp.getUserAuthToken()
		} 
		catch (error) {
			console.log("no fresh token from app")
			token = "1a461c917eaca84552d7c79dc804d1eec308405e";

		}

		let url = isDebug
		? 'https://staging.remote.qtalk.io/v1/verifyAuthIdToken'
		: 'https://remote.qtalk.io/v1/verifyAuthIdToken';

		if(!isTestUser) {
			url = url + '?isTestUser=true';
		}

		console.log(url);

		if (token) {
			fetch(url, {
				method: 'GET',
				headers: {
					'X-Auth-Id-Token': token ? token : ''
				},
			})
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				// console.log(data.userId)
				userId = data.userId;
				userName = data.userDetails.displayName;
				ref.child(gameID+"/token").set({
					id : "success",
					uid : userId,
					uname : userName

				})

			})
			.catch((e) => {ref.child(gameID+"/token").set(e);  })
		}
	}


	function updateTurn(){


		ref.child(gameID+"/currentTurn").transaction(function (currentData) {
			return currentData === "p1" ? "p2" : "p1"
		});
	}






	ref.child(gameID+"/players").once("value",function(snapshot){
		if(snapshot){
			var numberofplayers= snapshot.numChildren();


			if (numberofplayers === 0){
				myPlayerNumber =  "p1";
				ref.child(gameID+"/players").update({p1: "mario"}) ;
				ref.child(gameID+"/currentTurn").set("p1")

			}
			else if (numberofplayers === 1) {
				myPlayerNumber =  "p2";
				ref.child(gameID+"/players").update({p2: "Luigi"}) ;

			}
			else {
				alert("game full!")
			}
			console.log(myPlayerNumber);
		}

	})



	ref.child(gameID+"/currentTurn").on("value",function(snapshot){
		if (snapshot.val() === myPlayerNumber){
			// --- enable all game controls ---
			$("#userControl *").prop('disabled',false);


		}
		else{
			// --- disable the game controls. ---
			$("#userControl *").prop('disabled',true);
		}
	});

	function notifyGameStarted(){
		try {
	      if (window.QTalkApp) {
	        window.QTalkApp.notifyGameRoundStarted();
	      }
	    } catch {
	      console.log("New Game started");
	    }
	}

	function notifyGameEnded(){
		try {
	      if (window.QTalkApp) {
	        window.QTalkApp.notifyGameRoundEnded();
	      }
	    } catch {
	      console.log("Present Game ended");
	    }
	}
	

	// notifyGameStarted();
	getToken();
	generateGridData();
	generateAnswerStructure();
	showClues();

	$("#gameBoard").on("click","td",fetchClue)
	$("#checkBtn").on("click",handleClickOfCheck)
	$("#clueBtn").on("click",showClues)

	ref.child(gameID+"/gridData").on("value",function(snapshot){

		puzzleData = snapshot.val();
		getPuzzleLayout(snapshot.val())
		var count =0;
		for (var i = 1; i <= totalCells; i++) {

			if (puzzleData[i].status ==="wrong" || (puzzleData[i].status ===null&& puzzleData[i].letter!==".")) {
				count++;
			}

		}
		if (count === 0){
			// notifyGameEnded();
			// console.log("game Over")
		}

	})


})