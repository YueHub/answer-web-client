<template>
	<div>
		<button class="search-btn" @click="searchBtnClick">搜索</button>
	</div>
</template>

<script scoped>
export default {
	methods: {
		searchBtnClick: function () {
			this.$emit('searchBtnClickListener');
		}
	}
}
</script>

<style scoped>
.search-btn {
	position: absolute;
	border: 0px;
	width: 100px;
	height: 40px;
	color: white;
	font-size: 15px;
	letter-spacing: 1px;
	background: #3385ff;
	border-bottom: 1px solid #2d78f4;
	outline: medium;
	-webkit-appearance: none;
	cursor: pointer;
}

.search-btn:hover {
	opacity: 0.85;
}

@media screen and (min-width: 1120px) {
	.search-btn {
		position: absolute;
		top: 0;
		right: 0px;
		width: 14.84%;
		background-position: -264px 0;
		background-size: 304px 128px;
		background-repeat: no-repeat;
		padding: 0;
		margin: 0
	}
}

@media screen and (min-width:770px) and (max-width:1120px) {
	.search-btn {
		position: absolute;
		top: 0;
		right: 0px;
		width: 14.84%;
		background-position: -264px 0;
		background-size: 304px 128px;
		background-repeat: no-repeat;
		padding: 0;
		margin: 0
	}
}

@media screen and (max-width:770px) {
	.search-btn {
		position: absolute;
		top: 0;
		right: 0px;
		width: 14.84%;
		background-position: -264px 0;
		background-size: 304px 128px;
		background-repeat: no-repeat;
		padding: 0;
		margin: 0
	}
}
</style>


