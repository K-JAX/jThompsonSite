.DEFAULT_GOAL:=up

up:
	./start.sh

down:
	./kill.sh

.PHONY: deploy-theme
deploy-theme:
	@echo "Deploying theme to Bluehost"
	scp -r wordpress/wp-content/themes/jThompsonArch-backend-theme/* -P 2222 superpq8@162.241.24.116:/home3/superpq8/public_html/jThompsonArch/wp-content/themes/jThompsonArch-backend-theme/

.PHONY: deploy-plugins
deploy-plugins:
	@echo "Deploying plugins to Bluehost"
	scp -r wordpress/wp-content/plugins/* -P 2222 superpq8@162.241.24.116:/home3/superpq8/public_html/jThompsonArch/wp-content/plugins/

