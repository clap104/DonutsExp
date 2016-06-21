#!/usr/bin/python
import sys
inport logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/Website/")

from Website import app as application
application.secret_key = 'Han123do'
