$(document).ready(function() {
	setInterval(function() {
		$.getJSON("data.json", function(json, status) {
			var items = []

			$('#conn_status').text(status)

			$.each(json, function(key, val) {
				var item = `<tr id="${key}"><td>${key}</td><td>${val}</td></li>`

				items.push(item)
			})

			$('#tags').html(items.join(""))
		})
	}, 100)

	$("form").submit(function(event) {
		var form = $(this);

		$.ajax({ 
			 url   : form.attr('action')
			,type  : form.attr('method')
			,data  : form.serialize()
			,success: function(response){
				$('#ajax_response').text(response);
			}
		});

		event.preventDefault();
	})
})
