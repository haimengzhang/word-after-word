from bs4 import BeautifulSoup
import urllib.request
import re
import json

page = urllib.request.urlopen('https://thinkwritten.com/365-creative-writing-prompts/').read()

soup = BeautifulSoup(page, "html.parser")

paragraphs = soup.find_all("p")#p_starts_with_number)

prompts = {
    "prompts": []
}
id = 1
for p in paragraphs:
    innercontent=p.text
    if re.match("^[0-9]", innercontent) is not None:
        description = re.sub(r'\d+', '', innercontent)[2:]
        prompts['prompts'].append({"id": id, "description": description, "category" : ""})
        id += 1

with open('../PromptsForShuffle.json', 'w', encoding='utf-8') as outfile:
    json.dump(prompts, outfile, ensure_ascii=False)
