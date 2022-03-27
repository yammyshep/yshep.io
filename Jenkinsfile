pipeline {
  agent {
    docker {
    	image 'rustynode:latest'
	    args '-u root --privileged'
    }
  }
  triggers {
    githubPush()
  }
  stages {
    stage('Clone') {
      steps {
	      sh '''
          cd /
          git clone https://github.com/yammyshep/yshep.io.git
          cd yshep.io
	      '''
	    }
    }
    stage('Build') {
    	steps {
	      sh '''
	      	cd /yshep.io
	      	npm install
	        npx parcel build src/index.html
	      '''
	    }
    }
    stage('Test') {
      steps {
        sh '''
	        cd /yshep.io
	        echo "not yet supported"
	      '''
      }
    }
    stage('Deploy') {
      when { branch 'main' }
      steps {
        sh '''
	        cd /yshep.io
          ssh -o "StrictHostKeyChecking no" -i /ssh/deploy_id_ecdsa jenkins-deploy-www@10.0.16.4 "rm -r /var/www/yshep.io/*"
          scp -o "StrictHostKeyChecking no" -i /ssh/deploy_id_ecdsa dist/* jenkins-deploy-www@10.0.16.4:/var/www/yshep.io/
        '''
      }
    }
  }
}

