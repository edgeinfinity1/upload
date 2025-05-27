<?php

/*
 * This file is part of fof/upload.
 *
 * Copyright (c) FriendsOfFlarum.
 * Copyright (c) Flagrow.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Upload\Templates;

use FoF\Upload\File;

class VideoEmbedTemplate extends AbstractTemplate
{
    /**
     * @var string
     */
    protected $tag = 'video-embed';
    /**
     * {@inheritdoc}
     */
    public function name(): string
    {
        return '视频渲染';
    }

    /**
     * {@inheritdoc}
     */
    public function description(): string
    {
        return '调用embed video插件渲染视频';
    }

    /**
     * {@inheritdoc}
     */
    public function preview(File $file): string
    {
        return '[embed-video id="'.rand(100000,999999).'" url="'.$file->url.'" type="normal" live="false" qualities=""]';
    }
}
