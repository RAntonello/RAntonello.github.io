﻿/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/


CKEDITOR.editorConfig = function(config) {
    
    
   config.filebrowserBrowseUrl      = 'http://itcs-conf.org/mail/dada_mail_support_files/kcfinder/browse.php?type=files';
   config.filebrowserImageBrowseUrl = 'http://itcs-conf.org/mail/dada_mail_support_files/kcfinder/browse.php?type=images';
   config.filebrowserFlashBrowseUrl = 'http://itcs-conf.org/mail/dada_mail_support_files/kcfinder/browse.php?type=flash';
   config.filebrowserUploadUrl      = 'http://itcs-conf.org/mail/dada_mail_support_files/kcfinder/upload.php?type=files';
   config.filebrowserImageUploadUrl = 'http://itcs-conf.org/mail/dada_mail_support_files/kcfinder/upload.php?type=images';
   config.filebrowserFlashUploadUrl = 'http://itcs-conf.org/mail/dada_mail_support_files/kcfinder/upload.php?type=flash';
    
   
   config.height                    = '30em';

   config.fullPage                  = true;
   config.allowedContent            = true;

   config.startupOutlineBlocks      = true;  
    
   config.strinsert_button_label    = 'Tags';
   config.strinsert_button_title    = 'Tags';
   config.strinsert_button_voice    = 'Tags';
   config.extraPlugins              = 'strinsert';

   config.toolbar_DadaMail_Admin    =
    [
        { name: 'basicstyles',    items : [ 'strinsert', 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
        { name: 'styles',         items : [ 'Styles','Format','Font','FontSize' ] },
        { name: 'colors',         items : [ 'TextColor','BGColor' ] },
        '/',
        { name: 'paragraph',      items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
        { name: 'links',          items : [ 'Link','Unlink','Anchor' ] },
        { name: 'insert',         items : [ 'Image','Table','HorizontalRule','Smiley','SpecialChar' ] },
        '/',
        { name: 'clipboard',      items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
        { name: 'editing',        items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
        { name: 'document',       items : [ 'Source','Maximize', 'ShowBlocks'] },
    ];
};