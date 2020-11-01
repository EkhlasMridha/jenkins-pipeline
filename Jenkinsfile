pipeline{
    agent any
    stages{
        stage('package'){
            steps{
                echo 'Installing packages'
                nodejs('NodeJS'){
                    sh 'npm install'
                }
            }
        }
        stage('build'){
            steps{
                echo 'Building project'
                nodejs('NodeJS'){
                    sh 'npm run-script build'
                }
            }
        }
        stage('deploy'){
            steps{
                echo 'Deploying project'
                nodejs('NodeJS'){
                    sh 'sudo cp -r /var/lib/jenkins/workspace/jenkins-prototype_master/dist/rootline-basic /var/www/html'
                }
            }
        }
    }
}