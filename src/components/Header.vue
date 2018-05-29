<template>
	<nav>
		<div class="logo-row">
			<ul>
				<li class="sans-serif-font">
					<a href="javascript:void(0);">search</a>
				</li>

				<li>
					<a href="https://www.madison-reed.com">
						<img src="/src/assets/MRlogo-purple.svg" alt="Madison Reed">
					</a>
				</li>

				<li class="sans-serif-font">
					<a href="javascript:void(0);">log in</a>
					<img src="/src/assets/shopping-bag.svg" alt="Shopping bag">
				</li>
			</ul>
		</div>

		<div class="site-nav">
			<ul>
				<li class="sans-serif-font">
					<a href="javascript:void(0);">
						shop
					</a>
				</li>

				<li class="sans-serif-font">
					<a href="javascript:void(0);">
						about
					</a>
				</li>

				<li class="sans-serif-font">
					<a href="javascript:void(0);">
						how to
					</a>
				</li>

				<li class="sans-serif-font">
					<a href="javascript:void(0);">
						color bar
					</a>
				</li>

				<li class="sans-serif-font">
					<a href="javascript:void(0);">
						blog
					</a>
				</li>

				<li class="sans-serif-font">
					<a href="javascript:void(0);">
						give $15
					</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style lang="scss">
	nav {
		width: 1300px;
		margin: 0 auto;

		a {
			color: black;
			text-decoration: none;
			padding-right: 15px;
		}
	}

	.logo-row {
		text-transform: uppercase;

		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height: 50px;
		}

		li {
			font-size: 14px;
			padding: 0 20px;
			width: 90px;

			&:nth-child(2) {
				width: 250px;
			}

			&:nth-child(3) {
				display: flex;
				align-items: center;
			}
		}
	}

	.site-nav {
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			height: 50px;
		}

		li {
			font-size: 16px;
			width: 125px;
			text-transform: uppercase;
		}
	}
</style>