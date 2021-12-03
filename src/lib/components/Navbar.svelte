<!-- Component -->
<div class="navbar-component">
	<!-- Class `area` is a container -->
	<div class="navbar area">
		<!-- Logo -->
		<a href="/" class="brand">Brand</a>
		<!-- List of links -->
		<nav role="navigation" id="navigation" class="list">
			<a href="/" class="item -link">Home</a>
			<a href="/" class="item -link">Articles</a>
			<a href="/" class="item -link">Projects</a>
			<a href="/" class="item -link">Resources</a>
			<a href="/" class="item -link">About me</a>
			<span class="item"><i class="fa fa-search" /></span>
		</nav>
		<!-- Button to toggle the display menu  -->
		<button data-collapse data-target="#navigation" class="toggle">
			<!-- Hamburger icon -->
			<span class="icon" />
		</button>
	</div>
</div>

<style>
	a {
		text-decoration: none;
		transition: all 0.3s linear 0s;
	}
	.area {
        display: flex;
		flex-flow: row wrap;
		align-items: stretch;
		margin-left: auto;
		margin-right: auto;
	}
	@media (min-width: 768px) {
        .area {
            width: 750px;
		}
	}
	@media (min-width: 992px) {
        .area {
            width: 970px;
		}
	}
	@media (min-width: 1200px) {
        .area {
            width: 1140px;
		}
	}
	.navbar-component {
        z-index: 10;
        position: fixed;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
		background-color: rgba(255, 255, 255, 0.397);
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
	}
	.navbar-component > .navbar {
		justify-content: space-between;
	}
	.navbar > .brand {
		display: block;
		font-size: 16px;
		color: #777;
		margin: 22px;
	}
	.navbar > .toggle {
		outline: none;
		border: 0;
		display: inline-block;
		background-color: transparent;
		background-image: none;
		vertical-align: middle;
		text-align: center;
		white-space: nowrap;
		cursor: pointer;
		touch-action: manipulation;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		padding: 22px;
	}
	@media (min-width: 768px) {
		.navbar > .toggle {
			display: none;
		}
	}
	.navbar > .toggle > .icon {
		position: relative;
		margin-top: 8px;
		margin-bottom: 8px;
	}
	.navbar > .toggle > .icon,
	.navbar > .toggle > .icon:before,
	.navbar > .toggle > .icon:after {
		display: block;
		width: 24px;
		height: 3px;
		transition: background-color 0.3s linear, transform 0.3s linear;
		background-color: #555555;
	}
	.navbar > .toggle > .icon:before,
	.navbar > .toggle > .icon:after {
		position: absolute;
		content: '';
	}
	.navbar > .toggle > .icon:before {
		top: -8px;
	}
	.navbar > .toggle > .icon:after {
		top: 8px;
	}
	.navbar > .list {
		display: none;
		flex-flow: row nowrap;
		align-items: center;
		white-space: nowrap;
	}
	@media (min-width: 768px) {
		.navbar > .list {
			display: flex;
		}
	}
	@media (max-width: 768px) {
		.navbar > .list {
			position: fixed;
			top: 64px;
			left: 0;
			width: 100%;
			overflow-y: hidden;
			overflow-x: auto;
			border-top: 1px solid #ddd;
			background-color: #fff;
		}
	}
	.navbar > .list > .item {
		display: block;
		flex-shrink: 0;
		height: 64px;
		line-height: 64px;
		padding-left: 22px;
		padding-right: 22px;
		text-transform: uppercase;
		color: #555;
		font-size: 14px;
	}
	.navbar > .list > .item.-link {
		line-height: 68px;
		color: #555;
		border-bottom: 4px solid transparent;
	}
	.navbar > .list > .item.-link:hover,
	.navbar > .list > .item.-link:focus {
		color: #333;
		border-bottom-color: #673ab7;
	}
</style>
