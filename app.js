let buildGallery = function(){
	$("#images").empty();
	var url = "https://openlibrary.org/api/books/" + $("#ISBN").val();
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		data: {
		    "045152638": {
		        "title": "The adventures of Tom Sawyer",
		        "bibkeys": "ISBN:045152638",
		        "author": "Mark Twain",
		        "publish": "1997",
		        "publisher": "undefined",
		        "pages": "216",
		    }
		},

		
		success: function(data){
			data.message.forEach(function(src){
				$("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\""+src+"\"></div>");
				$(".info").append("test");
			});
		},
		error: function(err){
			console.log(err);
		}
	});
}