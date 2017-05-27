<?php
/**
 * Created by PhpStorm.
 * User: Сергей
 * Date: 27.05.2017
 * Time: 15:21
 */

namespace AppBundle\Admin\Consultant;


use Creonit\AdminBundle\Component\EditorComponent;

class IssueEditor extends EditorComponent
{

    /**
     * @entity Issue
     * @title Вопрос-ответ
     * @template
     *
     * {{ question | text | group('Вопрос') }}
     * {{ answer | textedit | group('Ответ') }}
     */
    public function schema()
    {
    }
}