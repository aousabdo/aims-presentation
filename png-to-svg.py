import cv2
import numpy as np
import svgwrite
import argparse

def png_to_svg(input_path, output_path):
    # Load the image and convert it to grayscale
    img = cv2.imread(input_path, cv2.IMREAD_GRAYSCALE)

    # Perform edge detection using Canny
    edges = cv2.Canny(img, threshold1=50, threshold2=150)

    # Find contours from the detected edges
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Create an SVG drawing
    dwg = svgwrite.Drawing(output_path, profile='tiny')

    # Draw contours on the SVG
    for contour in contours:
        # Convert contour points to an SVG-compatible format
        points = [(int(point[0][0]), int(point[0][1])) for point in contour]
        # Add a path to the SVG drawing
        dwg.add(dwg.polygon(points, fill='black'))

    # Save the SVG file
    dwg.save()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert PNG to SVG")
    parser.add_argument("input_path", help="Path to the input PNG file")
    parser.add_argument("output_path", help="Path to save the output SVG file")
    args = parser.parse_args()

    png_to_svg(args.input_path, args.output_path)
