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
	  echo "not yet"
	'''
      }
    }
    stage('Deploy') {
      steps {
        sh '''
	  cd /yshep.io
          echo "not yet"
        '''
      } 
    }
  }
}

