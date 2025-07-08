pipeline {
    agent any

    tools {
        nodejs 'node-18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install & Build Vue') {
            steps {
                dir('vue-project') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo "✅ Vue 빌드 성공"
        }
        failure {
            echo "❌ 빌드 실패"
        }
    }
}
