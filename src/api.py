import requests
import sys

img = './uploads/' + sys.argv[1]
api_user_token = '34792bf45b94aca78a6f4a03a1b704facf862510'
headers = {'Authorization': 'Bearer ' + api_user_token}

# Single/Several Dishes Detection
url = 'https://api.logmeal.es/v2/recognition/complete'
resp = requests.post(url,
                    files={'image': open(img, 'rb')},
                    headers=headers)

if(resp.json()):
    print(resp.json()['recognition_results'])
else:
    print("Error with the api")

#print(img)
sys.stdout.flush()
#return resp.json()['recognition_results']  