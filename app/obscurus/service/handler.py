# app.py
import numpy

def main(event, context):
    n = 16
    print(f"Square root of {n} is {numpy.sqrt(n)}")
    return "ok"
