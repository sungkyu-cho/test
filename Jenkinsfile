pipeline {
    agent any

    tools {
        nodejs 'node-18'
    }

    stages {
        stage('Install & Build Vue') {
            steps {
                dir('vue-test/vue-project') {
                    echo "📦 pnpm 의존성 설치 시작"
                    bat 'pnpm install'

                    echo "🏗 pnpm으로 빌드 시작"
                    bat 'pnpm run build'
                }
            }
        }
    }

    post {
        success {
            echo "✅ pnpm 빌드 성공!"
        }
        failure {
            echo "❌ pnpm 빌드 실패. 로그 확인 필요!"
        }
    }
}
