pipeline {
    agent any

    stages {
        stage('Build Docker') {
            steps {
                sh 'docker build -t saham-backend ./saham-app/backend'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker rm -f saham-backend || true
                docker run -d -p 3000:3000 --name saham-backend saham-backend
                '''
            }
        }
    }
}
