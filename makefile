run:
	npm link
	make test-talk

test-talk:
	maid talk

save:
	git add --all
	git commit -m "Progress :writing_hand:"
	git push origin HEAD

new:
	npm link
	npm version minor -m "${m}"
	npm publish

uninstall:
	npm uninstall -g maid

install:
	npm install -g maid
