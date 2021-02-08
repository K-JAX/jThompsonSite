.DEFAULT_GOAL:=up

up:
	./start.sh

down:
	./kill.sh

.PHONY: deploy-theme
deploy-theme:
	@echo "Deploying theme to Bluehost"
	scp -r wordpress/wp-content/themes/jThompsonArch-backend-theme/ -P 2222 jthomps3@162.241.30.56:/home2/jthomps3/public_html/wordpress/wp-content/themes/jThompsonArch-backend-theme/

.PHONY: deploy-plugins
deploy-plugins:
	@echo "Deploying plugins to Bluehost"
	scp -r wordpress/wp-content/plugins/* -P 2222 jthomps3@162.241.30.56:/home2/jthomps3/public_html/wordpress/wp-content/plugins/

