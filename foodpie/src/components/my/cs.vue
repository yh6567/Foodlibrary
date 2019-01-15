<template>
	<div class="cs">
		<h2>测试Datetime Picker</h2>
		<template>
			<mt-datetime-picker ref="picker" type="time" v-model="pickerValue">
			</mt-datetime-picker>
			<mt-datetime-picker
  v-model="pickerVisible"
  type="date"
  year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日">
</mt-datetime-picker>
		</template>
	</div>
</template>

<script>
	export default {
		methods: {
			openPicker() {
				this.$refs.picker.open();
			}
		}
	}
</script>

<style>
	.cs {
		width: 7.5rem;
		height: 13.34rem;
		background: #ccc;
	}
</style>