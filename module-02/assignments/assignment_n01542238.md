<!--Ronak Patel
    n01542238 -->

Question 1:. Open `module-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.
    1st Error:  There shouldn't be any space in tag like in this tag. I corrected the tag in upper line by eliminating space in tag. 
    Before: </effective Date> after solving error: </effectiveDate>
    ![image info](/images/Question1_1.png)

    2nd Error:  There is mismatch in starting and ending tag name. 
    Before: <originalName> Fresh Mornin' Sampler </originalname> 
    After solving Error: <originalName> Fresh Mornin' Sampler </originalName>
   ![image info](/images/Question1_2.png)

    3rd Error: There is mismatch in starting and ending tag name. 
    Before: <name> Oatmeal Breakfast </originalName>
    After solvinf Error: <originalName> Oatmeal Breakfast </originalName>
   ![image info](/images/Question1_3.png)

Question 2: What is the use of CDATA block in this document?
    The term CDATA stands for character data. CDATA is defined as blocks of text that are not parsed by the parser but are otherwise recognized as tags.
     ![image info](/images/Question2.png)

Question 3: Add comment line to the end of file which contains you name and student id.
     ![image info](/images/Question3.png)

Question 4: Identify prolog, document body, and epilog in the document. Are there any processing instructions?

    Assignment document 1st line is prolog: <?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
   ![image info](/images/Question4_1.png)
    
    Anything written between root element (<menuInfo></menuInfo>) is document body.
   ![image info](/images/Question4_2.png)

    Anything written like a comment is called epilog. ( ex: <!--Name: Ronak Patel
    Student_id: n01542238-->)
   ![image info](/images/Question4_3.png)

Question 5: Add inline DTD for this document.
    ![image info](/images/Question5.png)

Question 6: Verify that file is well-formed and valid.
    ![image info](/images/Question1_1.png)
    ![image info](/images/Question6_2.png)

Question 7: Create `style.css` file and link it to the file. Add the following styles to the .css:
    ![image info](/images/Question7.png)