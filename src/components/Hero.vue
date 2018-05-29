<template>
	<div class="hero-container">
		<div id="hero-image">
			<div class="hero-text">
				<p class="first-line sans-serif-font">find your</p>
				<p class="second-line handwriting-font">perfect hair color</p>
			</div>
		</div>

		<div class="hero-sub">
			<p class="sans-serif-font">
				Just a few quick questions and we'll recommend which Madison Reed <span>hair colors</span> are best for you. To speak to one of our Professional
				Colorists, please call or email us.
			</p>
		</div>
	</div>
</template>

<style lang="scss">
	#hero-image {
		margin: 0 auto;
		width: 1300px;
		height: 325px;
		background-image: url('/src/assets/redblondebrunette-hero-3425x9000.jpeg');
		background-size: contain;
	}

	.handwriting-font {
		font-family: 'Homemade Apple', cursive;
		letter-spacing: 1px;
	}

	.hero-text {
		padding-top: 100px;

		p {
			margin: 0;
			padding: 0;
		}

		.first-line {
			color: white;
			text-transform: uppercase;
			font-size: 38px;
			width: 250px;
			margin-left: 390px;
		}

		.second-line {
			color: white;
			font-size: 75px;
			width: 800px;
			margin: -30px 0 0 375px;
		}
	}

	.hero-sub {
		width: 700px;
		margin: 0 auto;

		p {
			text-align: center;
			font-size: 16px;

			span {
				font-weight: bold;
			}
		}
	}
</style>