from openai import OpenAI
import config1
import os

os.environ['open_ai_key'] = config1.open_ai_key

client = OpenAI(
  api_key=os.environ['open_ai_key'],
)

def generate_prompt(text_sample): 
  completion = client.chat.completions.create(
    model = "gpt-3.5-turbo",
    temperature = 0.8,
    max_tokens = 2000,
    messages = [
      {"role": "system", "content": "You are an expert prompt generator for music generation machine learning models."},

      {"role": "user", "content": """Generate a prompt using the template: 'a [mood] + [genre] song with [musical element]' given the following sample of text: 
      Ah, distinctly I remember it was in the bleak December; 
      And each separate dying ember wrought its ghost upon the floor. 
      Eagerly I wished the morrow;—vainly I had sought to borrow 
      From my books surcease of sorrow—sorrow for the lost Lenore— 
      For the rare and radiant maiden whom the angels name Lenore— 
      Nameless here for evermore."""},
      
      {"role": "assistant", "content": "a depressing and spooky classical song with a cello melody"}, 
      
      {"role": "user", "content": f"Generate one based on this text sample: \
       {text_sample}"}
    ]
  )
  return completion.choices[0].message.content