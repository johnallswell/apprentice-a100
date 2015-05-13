Template.home.rendered = function() {
	$('.apprenticeView').hide();
	$('.addForm').hide();
	$('.scoreSheetView').hide();
	$('.createGroupForm').hide();
};


Template.home.events({
	'click .apprentice': function(){
		$('.apprenticeView').show();
		$('.addForm').hide();
		$('.scoreSheetView').hide();
		$('.createGroupForm').hide();
	},
	'click .addApprentice': function(){
		$('.addForm').show();
		$('.apprenticeView').hide();
		$('.scoreSheetView').hide();
		$('.createGroupForm').hide();
	},
	'click .scoreSheet': function(){
		$('.scoreSheetView').show();
		$('.addForm').hide();
		$('.apprenticeView').hide();
		$('.createGroupForm').hide();
	},
	'click .createGroup': function(){
		$('.createGroupForm').show();
		$('.scoreSheetView').hide();
		$('.addForm').hide();
		$('.apprenticeView').hide();
	}
});
