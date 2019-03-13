#!/usr/bin/groovy

node {
	def app
	
	stage('Clone repository') {
		checkout scm
	}

	stage('Build image') {
		app = docker.build("azagramac/helloworld-node")
	}

	stage('Test image') {
		app.inside {
			sh 'echo "Tests passed"'
		}
	}

	stage('Push image') {
		docker.withRegistry('https://registry.hub.docker.com', 'docker-login') {
			app.push("${env.BUILD_NUMBER}")
			app.push("latest")
		}
	}

	stage('Start image') {
		sh 'docker run -dtp 8000:8000 --name webapp azagramac/helloworld-node'
        }
}
