(function() {
	'use strict';
	angular.module('MailBox', ['ui.router']);

	var mails = [
	{
		"id": "0",
		"from": "John Snow",
		"subject": "The saepe winter maiestatis an, regione civibus fuisset.",
		"date": "24/01/2002",
		"text": "Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "1",
		"from": "Maria Pirelli",
		"subject": "Vix alii saepe maiestatis an, regione civibus fuisset.",
		"date": "21/03/2003",
		"text": "Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "2",
		"from": "Victor Frank",
		"subject": "Post jukundam juventutemVix alii saepe Creature maiestatis an, regione civibus fuisset.",
		"date": "21/01/2001",
		"text": "Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "3",
		"from": "Luke Cage",
		"subject": "Vix alii saepe maiestatis an, regione civibus fuisset.",
		"date": "21/01/2001",
		"text": "Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "4",
		"from": "Anna Domini",
		"subject": "Vox populi saepe maiestatis an, regione civibus fuisset.",
		"date": "21/01/2001",
		"text": "Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "5",
		"from": "Philip K.",
		"subject": "Vix alii saepe maiestatis an, electirc sheeps regione civibus fuisset.",
		"date": "21/01/2001",
		"text": "Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "6",
		"from": "Veronica Mars",
		"subject": "Vix alii saepe maiestatis an, regione civibus fuisset.",
		"date": "21/01/2001",
		"text": "Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "7",
		"from": "Clarissa Dalloway",
		"subject": "Virginia Vix alii saepe maiestatis an, regione civibus fuisset.",
		"date": "21/01/2001",
		"text": "Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "8",
		"from": "Lily Evans",
		"subject": "Dear Harry, Vix alii saepe maiestatis an, regione civibus fuisset.",
		"date": "21/01/2001",
		"text": "Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "9",
		"from": "James Potter",
		"subject": "Vix alii saepe maiestatis an, regione civibus fuisset.",
		"date": "25/04/2003",
		"text": "Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "10",
		"from": "James Osterberg",
		"subject": "Vix alii saepe maiestatis open up and bleed an, regione civibus fuisset.",
		"date": "01/11/2001",
		"text": "Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "11",
		"from": "David Johannes",
		"subject": "Vix alii saepe maiestatis ny-dolls an, regione civibus fuisset.",
		"date": "21/01/2001",
		"text": "Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "12",
		"from": "Deborah Harry",
		"subject": "Vix alii saepe maiestatis atomic an, regione civibus fuisset.",
		"date": "21/01/2001",
		"text": "Maria eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "13",
		"from": "Ana Steel",
		"subject": "Vix alii saepe maiestatis an, regione civibus fuisset.",
		"date": "21/01/2001",
		"text": "Grey Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "14",
		"from": "Louisa Clark",
		"subject": "Vix alii saepe maiestatis an, regione civibus fuisset.",
		"date": "30/08/2002",
		"text": "Busy bee Eum no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	},
	{
		"id": "15",
		"from": "Peter Parker",
		"subject": "Vix alii saepe spider maiestatis an, regione civibus fuisset.",
		"date": "06/07/2006",
		"text": "Power Eum responsibility no omnis accusamus, ex erant tibique commune nam. Duo ei omittam scaevola, sea ad possit probatus. Idque facilisi definitionem an sea, ius an saepe dolorem commune, saperet petentium vix ea. Detracto referrentur quo ut, no mei ullum menandri percipitur. Ne suas erat eruditi vix, ei aeque facilisi eos.Ei vel harum scripta vivendum, sit eu detraxit rationibus omittantur, appetere periculis incorrupte pri ex. Liber populo argumentum no sed. Et sit veritus constituto accommodare, mei ad duis placerat dignissim, an eum maluisset intellegebat. Nec id perfecto accusata. Errem audire conceptam an est, error deleniti et vel.Eos natum audiam ad. Ad eum dicam vulputate. Meis facilisi ullamcorper ne duo, alii nostro reformidans mel ex, per clita mucius praesent no. Eu nibh aliquip laboramus eam, ius ne soluta adolescens, admodum evertitur nec ea"
	}]

	

})();