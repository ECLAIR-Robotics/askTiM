import pandas as pd
import urllib
import requests
from bs4 import BeautifulSoup
import re

url = "https://www.cs.utexas.edu/~scottm/cs314/"
res = requests.get(url)
html_page = res.content

soup = BeautifulSoup(html_page, features = 'html.parser')
text = soup.find_all(text=True)

all_text = ""
for x in text:
    if (x != '\n' and x != '\r\n'):
        all_text = all_text + x

print(all_text)

#lines = (line2 for line in text for line2 in line.strip().split('.') if line2)
#df = pd.DataFrame(lines, columns = ["text"])
#print(df.to_string())