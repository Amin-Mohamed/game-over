function keyPressed() {
	if (keyIsDown(LEFT_ARROW) || key === 'a') {
		dino.addAnimation('animate', runningDino);
		dino.mirrorX(-1);
		dino.setSpeed(0.5, 180);
		scrollSpeed = 0;
	}
	if (keyIsDown(RIGHT_ARROW) || key === 'd') {
		dino.addAnimation('animate', runningDino);
		dino.mirrorX(1);
		dino.setSpeed(0.5, 0);
		scrollSpeed = 3;
	}
	if (keyIsDown(UP_ARROW) || key === 'w') {
		if (JUMPQUEUE < JUMPLIMIT) {
			dino.addAnimation('animate', jumpingDino)
			dino.velocity.y = JUMP;
			JUMPQUEUE++;
		}
	}
	if (keyIsDown(SHIFT) && key === 'W') {
		if (JUMPQUEUE < JUMPLIMIT) {
			dino.addAnimation('animate', jumpingDino)
			dino.velocity.y = JUMP;
			JUMPQUEUE++;
		}
	}
	// Shoot fireball
	DRACARYS();

	// "Cheat" add life
	if (key === 'p') {
		HEALTH++
	}
}

function keyReleased() {
	if (keyCode === UP_ARROW || key === 'w') {
		return false;
	}
	dino.addAnimation('animate', walkingDino);
	dino.setSpeed(0, 0);
	scrollSpeed = 0.5;
}
