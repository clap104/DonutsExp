from flask import Flask, render_template
app = Flask(__name__)


#homepage1
@app.route("/")
def index():
	return render_template('index.html')

#homepage 2
@app.route("/home")
def homepage():
	return render_template('index.html')

#About us
@app.route("/about")
def aboutus():
	return render_template('about.html')

#Blog
@app.route("/blog")
def blog():
	return render_template('blog.html')

#Contact
@app.route("/contact")
def contact():
	return render_template('contact.html')


if __name__ == "__main__":
	app.run()

