// Create one dimensional array 
var arr = new Array(3); 

// Loop to create 2D array using 1D array 
console.log("Creating 2D array"); 
for (var i = 0; i < arr.length; i++) { 
	arr[i] = []; 
} 
var h = 0; 
var s = "GeeksforGeeks"; 

// Loop to initilize 2D array elements. 
for (var i = 0; i < 3; i++) { 
	for (var j = 0; j < 3; j++) { 

		arr[i][j] = s[h++]; 
	} 
} 

// Loop to display the elements of 2D array. 
for (var i = 0; i < 3; i++) { 
	for (var j = 0; j < 3; j++) 

	{ 
		console.log(arr[i][j] + " ");
    } 
}