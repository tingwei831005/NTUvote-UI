$.style ?= {}
$.style.candidate = ->
  $('.candidate .choices label.agree').append('''
    <span class="agree">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="720px" height="720px" viewBox="-60 -60 720 720" xml:space="preserve">
        <circle class="background" cx="300" cy="300" r="360"/>
        <path class="icon" d="M300,125c46.744,0,90.691,18.203,123.744,51.256S475,253.256,475,300 s-18.203,90.691-51.256,123.744S346.744,475,300,475s-90.691-18.203-123.744-51.256S125,346.744,125,300 s18.203-90.691,51.256-123.744S253.256,125,300,125 M300,75C175.736,75,75,175.736,75,300s100.736,225,225,225s225-100.736,225-225 S424.264,75,300,75L300,75z"/>
      </svg>
    </span>
    ''')
  $('.candidate .choices label.none').append('''
    <span class="none">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="720px" height="720px" viewBox="-60 -60 720 720" xml:space="preserve">
        <circle class="background" cx="300" cy="300" r="360"/>
        <rect class="icon" x="125" y="275" width="350" height="50"/>
      </svg>
    </span>
    ''')
  $('.candidate .choices label.disagree').append('''
    <span class="disagree">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="720px" height="720px" viewBox="-60 -60 720 720" xml:space="preserve">
        <circle class="background" cx="300" cy="300" r="360"/>
        <polygon class="icon" points="476.776,158.579 441.421,123.224 300,264.645 158.579,123.224 123.224,158.579 264.645,300 123.224,441.421 158.579,476.776 300,335.355 441.421,476.776 476.776,441.421 335.355,300"/>
      </svg>
    </span>
    ''')

  if !Modernizr.cssvhunit or !Modernizr.csscalc
    $('.candidate .pic').css 'height', ($(window).height()*0.8 - $('.candidate .id').height() - $('.candidate .elect').height() - $('.candidate .choices').height() - $('.candidate .name').height() - 60) + 'px'

$(window).load ->
  $.style.candidate()
