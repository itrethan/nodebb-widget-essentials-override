<div class="row">
	<div class="col-md-12" style="padding-left:30px;">
		<ul class="list-inline forum-stats">
			<li class="stats" title="{online}">{online}</li>[[global:online]]
			<li class="stats" title="{users}">{users}</li>[[global:users]]
			<li class="stats" title="{topics}">{topics}</li>[[global:topics]]
			<li class="stats" title="{posts}">{posts}</li>[[global:posts]]
		</ul>
	</div>
</div>


<script>
$(document).ready(function() {
	utils.makeNumbersHumanReadable($('.forum-stats .stats'));
});
</script>