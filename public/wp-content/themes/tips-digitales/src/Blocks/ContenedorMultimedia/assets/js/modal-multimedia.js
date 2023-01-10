jQuery(document).ready(function($)
{
	if (typeof showModalMultimedia !== 'undefined')
	{
		if (showModalMultimedia == 'si')
		{
			var modalMultimedia = new bootstrap.Modal(document.getElementById('modalMultimedia'),
			{
				backdrop: true,
				keyboard: false
			})

			modalMultimedia.show();

		    $('#modalMultimedia').on('hidden.bs.modal', function ()
		    {
				var memory = $(this).html();
			    $(this).html(memory);
		    });

			let player = document.getElementById("modalMultimediaVideo"),
			play = document.getElementById("btn-multimedia-si");

			play.addEventListener("click",function()
			{
				player.play();
			});

		}
	}
});