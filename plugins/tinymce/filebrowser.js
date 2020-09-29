var tinyFileBrowser = function wrFilebrowser(field_name, url, type, win)
{
	poppedUpWin = win;
	inputField = field_name;
	
	if (type == "file") 
	{
		type = "downloads"
	}
	;

	var cmsURL = getCmsUrl();

	if (cmsURL.indexOf("?") < 0) 
	{
		cmsURL = cmsURL + "?type=" + type;
	}
	else 
	{
		cmsURL = cmsURL + "&type=" + type;
	}

	tinyMCE.activeEditor.windowManager.open
	(
		{
			title: "File Browser",
			file: cmsURL,
			width: 720,
			height: 580,
			resizable: "yes",
			inline: "yes",
			close_previous: "no",
			popup_css: false,
			scrollbars: "yes"
		},
		{
			window: win,
			input: field_name
		}
	);

	return false;
}

