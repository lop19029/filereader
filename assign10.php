<?php
    //Only for debugging
    function consoleLog($message) {
		echo '<script type="text/javascript">' .
          'console.log(' . $message . ');</script>';
	}

    
    
    // create a PHP object with the filename,filetype, and cwd properties.
     class fileN
     {
        public $fileName;
        public $fileType;
        public $cwd;

        function set_name($name) {
            $this->fileName = $name;
        }
        function set_type($type) {
        $this->fileType = $type;
        }
        function set_cwd($cwd) {
            $this->cwd = $cwd;
        }
            
     }

     $cwd = getcwd();     // get path to the current working directory
     $folder = ".";       // Set the folder variable to specify the "current" directory    
     
     // create an array of filenames of files from the current directory
     $files = scandir($folder);
     $directory = Array();     // create a array object to store a list of objects.


     /*******************************************************************************
     *  Start your PHP code here!
     *
     * Add code to populate the "$directory" array with a list of "fileN" objects.
     * Use "new fileN()" to create a fileN object.    $directory[$i] = new fileN();
     * Set each fileN object property to the appropriate values.
     * You can get each file name from the "$files" array.
     * You can get each file type by calling the php function "filetype()" passing it the filename.
     * The "filetype()" function returns the file type. The returned file type is either "file" or "dir".  
     * The current working directory has been stored in $cwd.
     * To get the size of an array in php use the sizeof function:  $len = sizeof($files);
     *****************************************************************/
    
    $len = sizeof($files); //files array length
    for ($i = 0; $i < $len; $i++){
      $directory[$i] = new fileN();
      $directory[$i] -> set_name($files[$i]);
      $directory[$i] -> set_type(filetype($files[$i]));
      $directory[$i] -> set_cwd($cwd);
    }
     /*******************End of your Code *******************************************/

     // convert the PHP array of objects to a JSON string
     $str = json_encode($directory);
     print "\n $str \n";   //output the json string - The string is sent to the browser.      
 ?>
