$( function() {
var src = [
      "универсология",
      "моделирование зож",
      "моделирование здорового образа жизни",
      "кардинальная психодиагностика",
      "капсид",
      "психосистемология",
	  "универсальные законы",
	  "дух новой эпохи",
	  "международная научная школа универсологии",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
	  "",
    ];
$("#tags").autocomplete({ 
    maxResults: 10,
    source: function(request, response) {
        var results = $.ui.autocomplete.filter(src, request.term);
        response(results.slice(0, this.options.maxResults));
    }
});
});